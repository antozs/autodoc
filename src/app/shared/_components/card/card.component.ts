import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../../_data/home.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('product') product: IData;
  constructor() { }

  ngOnInit(): void {
  }
  getUrlImage(){
    return '/assets/images/home/'+this.product.photoName;
  }
}
