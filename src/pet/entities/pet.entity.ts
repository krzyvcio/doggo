import {Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

import {PetOwner} from "../../pet-owner/entities/pet-owner.entity";
import {User} from "../../user/entities/user.entity";

export enum PetType {
    None = 0,
    DOG = 1,
    CAT = 2,
}

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, (user) => user.id, {
        nullable: false
    })
    user: User;

    @OneToMany(() => PetOwner, (petOwner) => petOwner.id, {})
    petOwners: PetOwner[];

    @Column()
    name: string;

    @Column({default: PetType.DOG})
    type: PetType;

    @Column({nullable: true})
    birthDate: Date;

    @Column({nullable: true})
    photo: string;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        nullable: true
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
        nullable: true
    })
    modifiedAt: Date;
}
