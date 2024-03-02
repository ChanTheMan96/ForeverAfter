import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = [
    {
      title:'Price',
      about:'$16 + Tax: 07 + 15% Gratuity \n The above prices include decorative plastic silverware, heavy duty plastic clear plates, all the condiments including bread and butter.',
      image:'../../assets/img/plate.jpg',
    },
    {
      title:'Appetizers',
      about:'Pretzels $1.50 \n Mozzarella Sticks $1.25 \n Veggie and Cheese Skewers $3.00 \n Spicy Cauliflower.85c \n Mac N Cheese Bites .85c \n Crab Rangoon. 95c \n Boneless Buffalo wings.85c \n Venerable and Cheese Tray $135.00',
      image:'../../assets/img/MozarellaSticks.jpeg',
    },
    {
      title:'Platted Dinners',
      about:'(all dinners are served with house salad)\n\n14 oz Ribeye Steak Dinner/ served with Creamy Mashed Potato and sweet maple glazed baby carrots. $30\n\n8oz Salmon served with Roasted Red Potato and medley vegetable. $20\n\nBraised Short Rib over Creamy Mashed Potato and Asparagus $25',
      image:'../../assets/img/cater.jpeg',
    }
  ]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  check(i: number){
    return (i % 2  == 0) ? true : false
  }
}
