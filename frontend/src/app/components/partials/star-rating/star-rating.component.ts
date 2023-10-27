import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width': `${this.size}rem`,
      'height': `${this.size}rem`,
      'marginRight': `${this.size / 6}rem`,
    };
  }

  getStarImage(current: number): string{
    const previousHalf = current - 0.5;
    const imageName = 
    this.stars >= current
    ? 'star'
    : this.stars >= previousHalf
    ? 'half-star-sharp'
    : 'star-outline';
    return `/assets/stars/${imageName}.svg`;
  }

}
