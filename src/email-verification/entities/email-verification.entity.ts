import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity('emailVerification')
export class EmailVerification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 21 })
    token: string;

    @Column()
    userId: number;

    @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
    // @JoinColumn()
    user: User;

    @Column()
    validUntil: Date;

    @Column({ default: false })
    isVerification: boolean;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        nullable: true,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        nullable: true,
    })
    updatedAt: Date;
}
