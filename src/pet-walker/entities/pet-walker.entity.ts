import { Max, Min } from "class-validator";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Schedule } from "../../schedule/entities/schedule.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class PetWalker {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id, {
    nullable: false
  })
  user: User;

  @OneToMany(() => Schedule, (s) => s.id)
  schedules: Schedule[];

  @Column("float")
  @Min(1)
  @Max(5)
  rating: number;
}
