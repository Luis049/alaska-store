import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/api/products.service';
import { Product } from 'app/shared/models/product.interface';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './products.component.html',
})
export default class ProductsComponent implements OnInit  {

public productList: Product[]= [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.products.subscribe((data: Product[]) => {
      this.productList = data;
    });
  }
}
