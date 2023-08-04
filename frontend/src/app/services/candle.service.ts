import { Injectable } from '@angular/core';
import { Candle } from '../shared/models/Candle';
import { Tag } from '../shared/models/Tag';
import { Review } from '../shared/models/Review';
import { Observable } from 'rxjs';
import { candles, tags } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { CANDLES_BY_SEARCH_URL, CANDLES_BY_TAG_URL, CANDLES_TAGS_URL, CANDLES_URL, CANDLE_BY_ID_URL, REVIEWS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CandleService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Candle[]>{
    return this.http.get<Candle[]>(CANDLES_URL);
  }

  getAllCandlesBySearchTerm(searchTerm:string){
    return this.http.get<Candle[]>(CANDLES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(CANDLES_TAGS_URL);
  }

  getAllCandlesByTag(tag:string):Observable<Candle[]>{
    return tag === "All" ?
    this.getAll():
    this.http.get<Candle[]>(CANDLES_BY_TAG_URL + tag);
  }

  getCandleById(candleId:string):Observable<Candle>{
    return this.http.get<Candle>(CANDLE_BY_ID_URL + candleId);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(REVIEWS_URL);
  }

  getReviewsByCandle(candleId:string): Observable<Review[]> {
    return this.http.get<Review[]>(REVIEWS_URL + "/candle/" + candleId);
  }

  getReviewById(reviewId: string): Observable<Review> {
    return this.http.get<Review>(REVIEWS_URL + '/' + reviewId);
  }
}
