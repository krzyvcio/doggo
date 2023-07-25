import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity()
export class PasswordReset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 21 })
    token: string;

    @Column()
    userId: string;

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
    modifiedAt: Date;
}
