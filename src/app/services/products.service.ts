import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  newArrivals : Array<any>=[
    {id :1,
     cardTitle:'Tree pot',
     cardImage:'../../assets/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg',
     cardPrice:25,
     cardDescription:'Original package design from house .'
    },
    {id :2,
      cardTitle:'Fashion set',
      cardImage:'../../assets/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg',
      cardPrice:35,
      cardDescription:'Costume package .'
     },
     {id :3,
      cardTitle:'Juice Drinks',
      cardImage:'../../assets/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg',
      cardPrice:45,
      cardDescription:'Nature made another world .'
     }
  ]

  popular:Array<any>=
  [
    {id :1,
      cardTitle:'Package',
      cardImage:'../../assets/product/team-fredi-8HRKoay8VJE-unsplash.jpeg',
      cardPrice:50,
      cardDescription:'Original package design from house .'
     },
     {id :2,
       cardTitle:'Bottle',
       cardImage:'../../assets/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg',
       cardPrice:100,
       cardDescription:'Package design .'
      },
      {id :3,
       cardTitle:'Medicine',
       cardImage:'../../assets/product/anis-m-WnVrO-DvxcE-unsplash.jpeg',
       cardPrice:200,
       cardDescription:'Original design from house.'
      }
  ]
}
