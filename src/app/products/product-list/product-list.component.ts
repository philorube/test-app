import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { IProduct } from '../shared/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  products: IProduct[];
  private errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error
      );
  }

}
