import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let candlesObservable:Observable<Candle[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        candlesObservable = this.candleService.getAllCandlesBySearchTerm(params.searchTerm);
      else if(params.tag)
        candlesObservable = this.candleService.getAllCandlesByTag(params.tag);
      else
        candlesObservable = candleService.getAll();

        candlesObservable.subscribe((serverCandles) => {
          this.candles = serverCandles;
        })
    })
   }

  ngOnInit(): void {
  }

  toggleFavorite(candle: Candle): void {
    candle.favorite = !candle.favorite;
    localStorage.setItem(`favorite_${candle.id}`, candle.favorite.toString());
  }
}
