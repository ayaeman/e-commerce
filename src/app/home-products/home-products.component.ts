import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent implements OnInit{
  products!:any;
  constructor(private product : ProductsService)
  {this.products=product.newArrivals}
  ngOnInit(): void {
    
  }
}
