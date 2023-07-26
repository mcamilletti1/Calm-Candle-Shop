import { Component, OnInit } from '@angular/core';
import { CandleService } from 'src/app/services/candle.service';
import { Candle } from 'src/app/shared/models/Candle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candles: Candle[] =[];
  constructor(private candleService:CandleService) {
    this.candles = candleService.getAll();
   }

  ngOnInit(): void {
  }
}
