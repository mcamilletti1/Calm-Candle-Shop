import { Component, OnInit } from '@angular/core';
import { CandleService } from 'src/app/services/candle.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  tags?:Tag[];
  constructor(candleService:CandleService) { 
    candleService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
  }
}
