import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  newarrivals !:Array<any>;
  popular !:Array<any>;
  cardImage !:any;

constructor( private products:ProductsService) 
{
this.newarrivals=products.newArrivals;
this.popular=products.popular;

}
ngOnInit(): void {
  
    window.scrollTo(0, 0); // Scroll to the top
  
  
  console.log(this.newarrivals);
  console.log(this.popular)
  

}
}
