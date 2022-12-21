import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

prix!:number;
  listProdcuts:product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  constructor( private R:Router) { }

  ngOnInit(): void {
  }
  like(indice:number)
{
  this.listProdcuts[indice].like++;
}

buy(indice:number){
  this.listProdcuts[indice].quantity--;
  console.log(this.listProdcuts[indice].quantity);
}

routage(){
  this.R.navigate(['users'])
}

edit(id:any){
  this.R.navigate(['editProduct', id]);
  

}

}
