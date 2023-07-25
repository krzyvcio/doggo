import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';

import { ROLE } from '../../auth/constants/role.constant';
import { EmailVerification } from '../../email-verification/entities/email-verification.entity';
import { PasswordReset } from '../../password-reset/entities/password-reset.entity';
import { PhoneVerification } from '../../phone-verification/entities/phone-verification.entity';
import { Profile } from '../../profile/entities/profile.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Unique('username', ['username'])
    @Column({ length: 200 })
    username: string;

    @Unique('email', ['email'])
    @Column({ length: 100 })
    email: string;

    @Column()
    passwordHash: string;

    @Column({ length: 200 })
    name: string;

    @Column({ length: 200, nullable: true })
    firstName: string;
    @Column({ length: 200, nullable: true })
    lastName: string;
    @Column({ length: 100, nullable: true })
    middleName: string;

    @Column({ nullable: true })
    image: string;

    @Column({ default: false })
    emailVerified: boolean;

    @Column({ nullable: true })
    birthDate: Date;

    @OneToOne(() => EmailVerification, (user) => user.id, {
        nullable: true,
    })
    emailVerification: EmailVerification;

    @OneToMany(() => PasswordReset, (user) => user.id, {
        nullable: true,
    })
    passwordReset: PasswordReset;

    @Column({ length: 20, nullable: true })
    phone: string;

    @OneToOne(() => PhoneVerification, (user) => user.id, {
        nullable: true,
    })
    phoneVerification: PhoneVerification;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    registrationDate: Date;

    @Column('simple-array', { default: [ROLE.USER] })
    roles: ROLE[];

    @Column({ nullable: true })
    profileId: number;

    @OneToOne(() => Profile, (user) => user.id, {
        nullable: true,
    })
    profile: Profile;

    @Column({ default: false })
    isAccountDisabled: boolean;

    @Column({ nullable: true })
    age: number;

    @CreateDateColumn({ name: 'createdAt', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updatedAt', nullable: true })
    updatedAt: Date;

    // @OneToMany(() => Article, (article) => article.author)
    // articles: Article[];
}
