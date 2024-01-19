import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  total = 0;
  guest = 100;
  bar = 'Standard';
  day = 'Weekend';
  all_selected_values: number[] = [];
  limitedBarAmount = 0;

  ngOnInit(): void {
    this.getPrice();
  }
  getPrice() {
    let addOns = 0;
    for (let i = 0; i < this.all_selected_values.length; i++) {
      addOns += this.all_selected_values[i];
    }
    let barPrice;
    if (this.bar === 'Standard') {
      barPrice = 16
    } else if (this.bar === 'Premium') {
      barPrice = 19
    } else if (this.bar === 'Limited Bar') {
      barPrice = this.limitedBarAmount;
      this.total = ((this.day === 'Weekend') ? 3000 : 1500) + this.guest * 16 + (barPrice) + 250 + addOns;
      return;
    } else{
      barPrice = 0;
    }
    this.total = ((this.day === 'Weekend') ? 3000 : 1500) + this.guest * (barPrice +  16) + 250 + addOns;
  }
  onChange(value: number): void {
    if (this.all_selected_values.includes(value)) {
      this.all_selected_values = this.all_selected_values.filter(
        (item) => item !== value
      );
    } else {
      this.all_selected_values.push(value);
    }
    this.getPrice();
  }
}
