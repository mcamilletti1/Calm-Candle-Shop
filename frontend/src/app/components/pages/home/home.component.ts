import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandleService } from 'src/app/services/candle.service';
import { Candle } from 'src/app/shared/models/Candle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candles: Candle[] =[];
  constructor(private candleService:CandleService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.candles = this.candleService.getAllCandlesBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.candles = this.candleService.getAllCandlesByTag(params.tag);
      else
      this.candles = candleService.getAll();
    })
   }

  ngOnInit(): void {
  }
}
