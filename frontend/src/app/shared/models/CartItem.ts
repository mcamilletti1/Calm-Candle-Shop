import { Candle } from './Candle'

export class CartItem {
   constructor(public candle:Candle) { }
   quantity: number = 1;
   price: number = this.candle.price;
}