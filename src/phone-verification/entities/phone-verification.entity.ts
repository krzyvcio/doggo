import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity('phoneVerification')
export class PhoneVerification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 6 })
    code: string;

    @Column()
    userId: number;

    @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
    user: User;

    @Column()
    validUntil: Date;

    @Column({ default: false })
    isVerification: boolean;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
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
