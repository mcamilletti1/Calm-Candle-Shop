import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandleService } from 'src/app/services/candle.service';
import { ReviewService } from 'src/app/services/review.service';
import { CartService } from 'src/app/services/cart.service';
import { Candle } from 'src/app/shared/models/Candle';
import { Review } from 'src/app/shared/models/Review';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-candle-page',
  templateUrl: './candle-page.component.html',
  styleUrls: ['./candle-page.component.css']
})
export class CandlePageComponent implements OnInit {
  candle!: Candle;
  reviews: Review[] = [];
  rating: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private candleService: CandleService,
    private reviewService: ReviewService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          if (params.id) {
            return this.candleService.getCandleById(params.id);
          }
          throw new Error('Candle ID not provided in URL params.');
        })
      )
      .subscribe(
        (serverCandle) => {
          this.candle = serverCandle;
          this.reviewService.getReviewsByCandle(this.candle.id).subscribe(
            (serverReviews) => {
              this.reviews = serverReviews;

              if (this.reviews.length > 0) {
                let rating = 0;
                for (const review of this.reviews) {
                  rating += review.rating;
                }
                this.rating = rating / this.reviews.length;
              }
            },
            (error) => {
              console.error('Error fetching reviews:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching candle:', error);
        }
      );
  }

  toggleFavorite(): void {
    this.candle.favorite = !this.candle.favorite;
    localStorage.setItem(`favorite_${this.candle.id}`, this.candle.favorite.toString());
  }

  addToCart() {
    this.cartService.addToCart(this.candle);
    this.router.navigateByUrl('/cart-page');
  }
}
