import { Injectable } from '@angular/core';
import { Candle } from '../shared/models/Candle';
import { candles, tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

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

  getAllTags():Tag[]{
    return tags
  }

  getAllCandlesByTag(tag:string):Candle[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(candle => candle.tags?.includes(tag));
  }

  getCandleById(candleId:string):Candle{
    return this.getAll().find(candle => candle.id == candleId) ?? new Candle();
  }
}
