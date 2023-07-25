import {Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

import {User} from "../../user/entities/user.entity";

export enum WalletStatus {
    ACTIVE = 1,
    INACTIVE = 0,
}

export enum MoneyCurrency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
    PLN = "PLN",
}

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wallet: WalletStatus;

    @OneToOne(() => User, (user) => user.id, {
        nullable: false
    })
    user: User;

    @Column({default: 0})
    walletAddress: number;

    @Column()
    balance: number;

    @Column({default: MoneyCurrency.PLN})
    currency: MoneyCurrency;

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
