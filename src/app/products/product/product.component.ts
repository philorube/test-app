import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IProduct } from '../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

 // @
  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
