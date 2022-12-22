import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "schedules" })
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: null })
  name: string;

  @Column({ nullable: true, default: null })
  workDate: Date;

  @Column({ nullable: true, default: null })
  startHour: Date;

  @Column({ nullable: true, default: null })
  endHour: Date;

  @Column({ nullable: true, default: null })
  dayOfWeek: number;

  @Column({ nullable: true, default: null })
  repeatDaysNumber: number;

  @Column()
  isHoliday: boolean;

  @Column()
  isWeekend: boolean;

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
