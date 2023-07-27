import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandleService } from 'src/app/services/candle.service';
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
  constructor(private activatedRoute:ActivatedRoute, private candleService:CandleService) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.candle = candleService.getCandleById(params.id);
      this.reviews = candleService.getReviewsByCandle(params.id);
    })
  }

  ngOnInit(): void {
  }
}
