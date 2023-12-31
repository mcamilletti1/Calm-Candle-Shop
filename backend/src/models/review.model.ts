import { Schema, Types, model, Document } from 'mongoose';

export interface Review extends Document {
    candleId: Types.ObjectId;
    title: string;
    name: string;
    rating: number;
    comment: string;
}

const ReviewSchema = new Schema<Review>(
    {
       candleId: {type: Schema.Types.ObjectId, ref: 'Candle', required: true},
       title: {type: String, required: true},
       name: {type: String, required: true},
       rating: {type: Number, required: true},
       comment: {type: String, required: true} 
    }
)

export const ReviewModel = model<Review>('Review', ReviewSchema);