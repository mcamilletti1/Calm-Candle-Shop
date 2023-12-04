import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CandleService } from 'src/app/services/candle.service';
import { ReviewService } from 'src/app/services/review.service';
import { Candle } from 'src/app/shared/models/Candle';
import { Review } from 'src/app/shared/models/Review'; // Import your Review model

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candles: Candle[] = [];
  rating: number = 0;

  constructor(
    private candleService: CandleService,
    private reviewService: ReviewService,
    private activatedRoute: ActivatedRoute
  ) {
    let candlesObservable: Observable<Candle[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        candlesObservable = this.candleService.getAllCandlesBySearchTerm(params.searchTerm);
      else if (params.tag)
        candlesObservable = this.candleService.getAllCandlesByTag(params.tag);
      else
        candlesObservable = candleService.getAll();

      candlesObservable.subscribe((serverCandles) => {
        this.candles = serverCandles;

        for (const candle of this.candles) {
          this.reviewService.getReviewsByCandle(candle.id).subscribe(
            (serverReviews) => {
              if (serverReviews.length > 0) {
                let rating = 0;
                for (const review of serverReviews) {
                  rating += review.rating;
                }
                rating = rating / serverReviews.length;
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

  ngOnInit(): void {
  }

  toggleFavorite(candle: Candle): void {
    candle.favorite = !candle.favorite;
    localStorage.setItem(`favorite_${candle.id}`, candle.favorite.toString());
  }
}

