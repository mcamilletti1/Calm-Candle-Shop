import { Schema } from 'mongoose'
import { Review } from './review.model';

export interface Candle{
    id:string;
    name:string;
    price:number;
    favorite: boolean;
    stars: number;
    imageUrl: string;
    tags: string[];
    scents: string[];
    reviews: Review[];
    description: string;
}

export const CandleSchema = new Schema<Candle>(
    {
        name: {type: String, required:true},
        price: {type: Number, required: true},
        tags: {type: [String]},
        favorite: {type: Boolean, default: false},
        stars: {type: Number, required:true},
        imageUrl: {type:String, required:true},
        scents: {type: [String], required:true},
        description: {type: String, required:true}
    }, 
    {
        toJSON:{
           virtuals: true 
        },
        toObject:{
           virtuals: true 
        },
        timestamps:true
    }
)