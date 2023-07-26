//import { Review } from "./Review"

export class Candle{
    id!:string;
    name!:string;
    price!:number;
    favorite!: boolean;
    stars!: number;
    imageUrl!: string;
    tags!: string[];
    scents!: string[];
    //reviews: Review[] = [];
    description!: string;
}