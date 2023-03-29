import { Min } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { User } from "../../user/entities/user.entity";
import { MoneyCurrency, Wallet } from "../../wallet/entities/wallet.entity";

export enum TransactionStatus {
  PREPARATION = "PREPARATION",
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id, {
    nullable: false
  })
  user: User;

  @OneToOne(() => Wallet, (wallet) => wallet.id, {
    nullable: false
  })
  fromWallet: Wallet;

  @OneToOne(() => Wallet, (wallet) => wallet.id, {
    nullable: false
  })
  toWallet: Wallet;

  @Column({ nullable: false })
  @Min(0)
  amount: number;

  @Column()
  currency: MoneyCurrency;

  @Column()
  startedAt: Date;

  @Column()
  endedAt: Date;

  @Column()
  status: TransactionStatus;

  @Column("interval")
  duration: number;

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
