import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { ROLE } from "../../auth/constants/role.constant";
import { PetOwner } from "../../pet-owner/entities/pet-owner.entity";
import { PetWalker } from "../../pet-walker/entities/pet-walker.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @OneToOne(() => User, (user) => user.id, {
    nullable: false
  })
  user: User;

  @Column()
  profileType: ROLE;

  @OneToOne(() => PetOwner, (owner) => owner.id, {
    nullable: true
  })
  petOwner: PetOwner;

  @OneToOne(() => PetWalker, (walker) => walker.id, {
    nullable: true
  })
  petWalker: PetWalker;

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
