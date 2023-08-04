import {model, Schema, Types} from 'mongoose';
import { Candle } from './candle.model';
import { OrderStatus } from '../constants/order_status';
import { CandleSchema } from './candle.model'


export interface OrderItem{
    candle: Candle;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        candle: {type: CandleSchema, required: true},
        price: { type: Number, required:true },
        quantity: {type: Number, required: true}
    }
);

export interface Order {
    id: number;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    address: string;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
}

const orderSchema = new Schema<Order>({
    name: {type: String, required: true},
    address: {type: String, required: true},
    paymentId: {type: String},
    totalPrice: {type: Number, required: true},
    items: {type: [OrderItemSchema], required: true},
    status: {type: String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId, required: true}
},
{
   timestamps: true,
   toJSON: {
    virtuals: true
   },
    toObject: {
        virtuals: true
    }
});

export const OrderModel = model('order', orderSchema);

