import { Schema, Types } from 'mongoose';

export interface Review {
    id: string;
    candleId: Types.ObjectId;
    title: string;
    name: string;
    rating: number;
    comment: string;
}

export const ReviewSchema = new Schema<Review>(
    {
       candleId: {type: Schema.Types.ObjectId, ref: 'Candle', required: true},
       title: {type: String, required: true},
       name: {type: String, required: true},
       rating: {type: Number, required: true},
       comment: {type: String, required: true} 
    }
)