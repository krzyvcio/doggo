import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { MapPoint } from '../../map-point/entities/map-point.entity';

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => MapPoint, (mp) => mp.id, {
        nullable: true,
    })
    mapPoint: MapPoint;

    @OneToOne(() => MapPoint, (mp) => mp.id, {
        nullable: true,
    })
    related: MapPoint;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    zipCode: string;
}
