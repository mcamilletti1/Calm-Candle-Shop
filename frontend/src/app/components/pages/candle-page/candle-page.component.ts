import { Component } from '@angular/core';
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
export class CandlePageComponent {
  candle!: Candle;
  reviews: Review[] = [];
  constructor(private activatedRoute:ActivatedRoute, private candleService:CandleService,
    private cartService:CartService, private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.candle = candleService.getCandleById(params.id);
      this.reviews = candleService.getReviewsByCandle(params.id);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.candle);
    this.router.navigateByUrl('/cart-page');
  }
}
