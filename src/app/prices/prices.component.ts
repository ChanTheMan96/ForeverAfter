import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit{

  total = 0;
  guest = 100;
  bar = 'Standard';
  day = 'Weekend';
  all_selected_values: number[] = [];

  ngOnInit(): void {
    this.getPrice();
  }
  getPrice() {
    let addOns = 0;
    for (let i = 0; i < this.all_selected_values.length; i++ ) {
      addOns += this.all_selected_values[i];
    }
    this.total = ((this.day === 'Weekend') ? 3000 : 1500) + this.guest * (((this.bar === 'Standard') ? 16 : 19) + 16) + 250 + addOns;
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
