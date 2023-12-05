import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CandleService } from 'src/app/services/candle.service';
import { ReviewService } from 'src/app/services/review.service';
import { Candle } from 'src/app/shared/models/Candle';
import { Review } from 'src/app/shared/models/Review'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candles: Candle[] = [];
  averageRatings: { [key: string]: number } = {}; // Change the key type to string
  reviews: Review[] = [];

  constructor(
    private candleService: CandleService,
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let candlesObservable: Observable<Candle[]>;

      if (params.searchTerm)
        candlesObservable = this.candleService.getAllCandlesBySearchTerm(params.searchTerm);
      else if (params.tag)
        candlesObservable = this.candleService.getAllCandlesByTag(params.tag);
      else
        candlesObservable = this.candleService.getAll();

      candlesObservable.subscribe((serverCandles) => {
        this.candles = serverCandles;

        for (const candle of serverCandles) {
          this.reviewService.getReviewsByCandle(candle.id).subscribe(
            (serverReviews) => {
              this.reviews = serverReviews;

              if (serverReviews.length > 0) {
                let rating = 0;

                for (const review of serverReviews) {
                  rating += review.rating;
                }

                // Store the average rating using the candle's id as the key
                this.averageRatings[candle.id] = rating / serverReviews.length;
              } else {
                // If there are no reviews, set the average rating to 0
                this.averageRatings[candle.id] = 0;
              }
            },
            (error) => {
              console.error('Error fetching reviews:', error);
            }
          );
        }
      });
    });
  }

  toggleFavorite(candle: Candle): void {
    candle.favorite = !candle.favorite;
    localStorage.setItem(`favorite_${candle.id}`, candle.favorite.toString());
  }

  stringToNumber(value: string): number {
    return parseInt(value, 10);
  }
}
