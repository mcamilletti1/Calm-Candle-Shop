import { Injectable } from '@angular/core';
import { Candle } from '../shared/models/Candle';
import { candles } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CandleService {

  constructor() { }

  getAll(): Candle[]{
    return candles;
  }

  getAllCandlesBySearchTerm(searchTerm:string){
    return this.getAll().filter(candle => candle.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
