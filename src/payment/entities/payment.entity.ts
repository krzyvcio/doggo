import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Order } from '../../order/entities/order.entity';
import { MoneyCurrency } from '../../wallet/entities/wallet.entity';

export enum PaymentMethod {
    INTERNAL_PAYMENT = 'INTERNAL_PAYMENT',
    WITHDRAWAL = 'WITHDRAWAL',
    REMITTANCE = 'REMITTANCE',
}

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    method: PaymentMethod;

    @Column({ nullable: false })
    amount: number;

    @Column({ nullable: false })
    currency: MoneyCurrency;

    @Column({ nullable: false })
    description: string;

    @OneToOne(() => Order, (order) => order.id, {
        nullable: false,
    })
    order: Order;
}
