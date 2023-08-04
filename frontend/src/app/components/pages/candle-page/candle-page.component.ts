import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandleService } from 'src/app/services/candle.service';
import { CartService } from 'src/app/services/cart.service';
import { Candle } from 'src/app/shared/models/Candle';
import { Review } from 'src/app/shared/models/Review';

@Component({
  selector: 'app-candle-page',
  templateUrl: './candle-page.component.html',
  styleUrls: ['./candle-page.component.css']
})
export class CandlePageComponent implements OnInit{
  candle!: Candle;
  reviews: Review[] = [];
  constructor(activatedRoute:ActivatedRoute, private candleService:CandleService,
    private cartService:CartService, private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      candleService.getCandleById(params.id).subscribe(serverCandle => {
        this.candle = serverCandle;
      });
      candleService.getReviewsByCandle(params.id).subscribe(serverReviews => this.reviews = serverReviews);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.candle);
    this.router.navigateByUrl('/cart-page');
  }
}
