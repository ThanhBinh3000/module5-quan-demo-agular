import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 120000,
      description: 'new',
      image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-5.png'
    },
    {
      id: 2,
      name: 'IPhone 13',
      price: 230000,
      description: 'new',
      image: 'https://cdn.tgdd.vn/Products/Images/42/228739/iphone-12-pro-silver-600x600.jpg'
    },
  ];
  isShowCreatedForm = false;
  isShowEditedForm = false;
  currentProduct: Product = {};

  constructor() { }

  changeState() {
    this.isShowCreatedForm = !this.isShowCreatedForm;
  }

  changeStateEditForm(product) {
    this.isShowEditedForm = !this.isShowEditedForm;
    this.currentProduct = product;
  }

  ngOnInit() {
  }

  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products[index] = product;
  }
}
