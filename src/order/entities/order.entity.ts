import {Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

import {Location} from "../../location/entities/location.entity";
import {Pet} from "../../pet/entities/pet.entity";
import {Schedule} from "../../schedule/entities/schedule.entity";
import {Trip} from "../../trip/entities/trip.entity";
import {User} from "../../user/entities/user.entity";
import {MoneyCurrency} from "../../wallet/entities/wallet.entity";

export enum OrderType {
    WALK = "WALK",
    CARRY = "CARRY",
    FEED = "FEED",
}

export enum CarryType {
    WALKER_PLACE = "WALKER_PLACE",
    OWNER_PLACE = "OWNER_PLACE",
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, (user) => user.id, {
        nullable: false
    })
    user: User;

    @Column("simple-array")
    type: OrderType[];

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    startAt: Date;
    @Column()
    endAt: Date;

    @OneToMany(() => Pet, (pet) => pet.id, {})
    pets: Pet[];

    @OneToMany(() => Trip, (trip) => trip.id, {})
    trips: Trip[];

    @Column()
    estimatedCost: number;

    @Column()
    currency: MoneyCurrency;

    @Column("interval", {nullable: true})
    walkDuration: number;
    @Column("float", {nullable: true})
    walkDistance: number;

    @Column()
    carryType: CarryType;
    @OneToOne(() => Location, (loc) => loc.id, {
        nullable: true
    })
    carryLocation: Location;

    @Column()
    feedInfo: string;

    @OneToMany(() => Schedule, (schedule) => schedule.id, {})
    schedule: Schedule[];

    @Column({default: false})
    isPublished: boolean;

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
