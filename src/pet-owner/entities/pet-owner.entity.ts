import { Max, Min } from 'class-validator';
import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { Profile } from '../../profile/entities/profile.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class PetOwner {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ nullable: false })
    userId: number;

    @OneToOne(() => User, (user) => user.id, {
        nullable: false,
    })
    user: User;

    @Column({ nullable: false })
    profileId: number;

    @OneToOne(() => Profile, (profile) => profile.id, {
        nullable: false,
    })
    profile: Profile;

    @OneToMany(() => Schedule, (s) => s.id)
    schedules: Schedule[];

    @Column('float', { nullable: true, default: null })
    @Min(1)
    @Max(5)
    rating: number | null;
}
