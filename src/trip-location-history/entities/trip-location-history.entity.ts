import { Point } from 'geojson';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Trip } from '../../trip/entities/trip.entity';

@Entity()
export class TripLocationHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Trip, (trip) => trip.id, {
        nullable: false,
    })
    trip: Trip;

    @Column({
        type: 'geography',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    })
    location: Point;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: true,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        nullable: true,
    })
    modifiedAt: Date;
}
