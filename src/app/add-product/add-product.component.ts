import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:product={id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0};
  constructor() { }

  ngOnInit(): void {

  }
  save(F: NgForm){
    console.log(F);
    console.log(F.controls['title'].value);
    console.log(F.value);

  }

}
