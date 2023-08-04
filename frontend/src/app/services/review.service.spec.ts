import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from 'src/app/shared/models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = '/api/reviews';

  constructor(private http: HttpClient) { }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(REVIEWS_URL, review);
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

  updateReview(id: string, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${id}`, review);
  }

  deleteReview(id: string): Observable<Review> {
    return this.http.delete<Review>(`${this.apiUrl}/${id}`);
  }
}