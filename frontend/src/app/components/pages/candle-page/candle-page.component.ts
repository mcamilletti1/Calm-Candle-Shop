import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandleService } from 'src/app/services/candle.service';
import { Candle } from 'src/app/shared/models/Candle';

@Component({
  selector: 'app-candle-page',
  templateUrl: './candle-page.component.html',
  styleUrls: ['./candle-page.component.css']
})
export class CandlePageComponent {
  candle!: Candle;
  constructor(activatedRoute:ActivatedRoute, candleService:CandleService) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.candle = candleService.getCandleById(params.id);
    })
  }

  ngOnInit(): void {
  }
}
