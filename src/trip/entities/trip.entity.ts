import {Max, Min} from "class-validator";
import {Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

import {Location} from "../../location/entities/location.entity";
import {Payment} from "../../payment/entities/payment.entity";
import {User} from "../../user/entities/user.entity";

export enum TripStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    FINISHED = "FINISHED",
    FINISHED_WITH_ERRORS = "FINISHED_WITH_ERRORS",
    EMERGENCY_STOP = "EMERGENCY_STOP",
    ACCIDENT_STOP = "ACCIDENT_STOP",
}

@Entity()
export class Trip {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, (user) => user.id, {
        nullable: false
    })
    petPatron: User;
    @OneToOne(() => User, (user) => user.id, {
        nullable: false
    })
    petOwner: User;

    @Column()
    pickupInfo: string;

    @OneToOne(() => Location, (loc) => loc.id, {
        nullable: false
    })
    pickupLocation: Location;

    //esttymowany czas na dotrcie patrona po odbiór psa
    @Column()
    pickupEstimateTime: number;

    @Column()
    pickupTime: Date;

    @OneToOne(() => Location, (loc) => loc.id, {
        nullable: false
    })
    startLocation: Location;
    @OneToOne(() => Location, (loc) => loc.id, {
        nullable: false
    })
    endLocation: Location;

    @Column()
    feedingInfo: string;

    //czas dania checi wyprowadzenia psa do akceptacji przez wlasiciela
    @Column("interval")
    requestTime: string;

    @Column()
    startTime: Date;
    @Column()
    endTime: Date;

    @Column("float", {})
    walkDistance: number;

    @Column()
    walkDuration: number;
    @Column()
    idleWalkDuration: number;

    @Column()
    status: TripStatus;
    @Column({nullable: true, default: null})
    cancelReason: string;

    @OneToOne(() => Payment, (payment) => payment.id, {
        nullable: false
    })
    payment: Payment;

    @Column()
    expectedFare: number;
    @Column()
    expectedDistance: number;
    @Column()
    expectedDuration: number;

    @Column("float", {})
    totalFare: number;
    @Column("float", {})
    netFare: number;

    @Column()
    totalDistance: number;
    @Column()
    totalDuration: number;

    @Column()
    zoneCode: string;

    @Column()
    @Min(1)
    @Max(5)
    ratingForPetOwner: number;

    @Column()
    @Min(1)
    @Max(5)
    ratingForPetPatron: number;

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
