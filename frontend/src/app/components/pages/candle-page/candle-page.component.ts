import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandleService } from 'src/app/services/candle.service';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private candleService: CandleService,
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
          this.candleService.getReviewsByCandle(this.candle.id).subscribe(
            (serverReviews) => {
              this.reviews = serverReviews;
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
