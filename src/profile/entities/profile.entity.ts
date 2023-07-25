import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { PetOwner } from '../../pet-owner/entities/pet-owner.entity';
import { PetPatron } from '../../pet-patron/entities/pet-patron.entity';
import { User } from '../../user/entities/user.entity';

@Entity('profiles')
export class Profile {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ nullable: true })
    bio: string;

    @OneToOne(() => User, (user) => user.id, {
        nullable: false,
    })
    user: User;

    @Column({ nullable: false })
    userId: number;

    @OneToOne(() => PetOwner, (owner) => owner.id, {
        nullable: true,
    })
    petOwner: PetOwner;

    @Column({ nullable: true })
    petOwnerId: number;

    @OneToOne(() => PetPatron, (walker) => walker.id, {
        nullable: true,
    })
    petPatron: PetPatron;

    @Column({ nullable: true })
    petPatronId: number;

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
    updatedAt: Date;
}
