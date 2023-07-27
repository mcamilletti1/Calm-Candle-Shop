import { Injectable } from '@angular/core';
import { Candle } from '../shared/models/Candle';
import { candles, tags, reviews } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { Review } from '../shared/models/Review';

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

  getReviewsByCandle(candleId:string): Review[] {
    const candle = this.getCandleById(candleId)
    const reviewsOfCandle: Review[] = [];

    if (candle) {
      candle.reviews.forEach(reviewId => {
        const review = this.getReviewById(reviewId);
        if (review) {
          reviewsOfCandle.push(review)
        }
      });
    }
    return reviewsOfCandle;
  }

  getReviewById(reviewId: string): Review | undefined {
    return reviews.find(review => review.id === reviewId);
  }
}
