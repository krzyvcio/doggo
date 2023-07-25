import { Point } from 'geojson';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MapPoint {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'geography',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true,
    })
    location: Point;
    //UPDATE customers SET location = 'point(37.7, 122.4)' where id = 123;
    //UPDATE customers SET location = ST_MakePoint(lat, lon) where id = 123;

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
