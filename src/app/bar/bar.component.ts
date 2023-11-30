import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

  menu = [
    {
      title:'Standard Bar',
      about:'Domestic Beer, Wine, Seltzer, and Rail Liquor Mixed Drinks for $16 (per person)\n Bud Light \n Budweiser\nBusch\nBusch Light\nBusch N/A\nCoors Light\nMiller Lite\nNatural Light\nCabernet Sauvignon\nChardonnay\nMerlot\nMoscato\nWhite Zinfandel\nHigh Noon\nWhite Claw\n',
      image:'../../assets/img/beer.jpeg',
    },
    {
      title:'Premium Bar',
      about:'Standard Bar + Premium Beer and Top Shelf Liquor with Mixers for an extra $3 \nAngry Orchard\nBlue Moon\nBoulevard Wheat\nCorona Extra\nGuinness\nHeineken\nModelo Especial\nShock Top\nMichelob Ultra\nCaptain Morgan\nCrown Royal\nFireball\nJack Daniels\nMalibu\nRumchata\nSmirnoff',
      image:'../../assets/img/champagne.jpeg',
    }
  ]

  check(i: number){
    return (i % 2  == 0) ? true : false
  }
}
