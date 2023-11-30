import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  total = 0;
  guest = 0;
  bar = 'Standard'
  day = 'Weekend'
  getPrice() {
    this.total = ((this.day === 'Weekend') ? 3000 : 1500) + this.guest * (((this.bar === 'Standard') ? 16 : 19) + 16) + 250

  }
}
