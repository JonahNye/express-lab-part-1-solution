import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

interface Item {
  product : string;
  quantity : number;
  price : number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent{

  constructor(private cartService : CartService) {
  this.cartService.getCart().subscribe((res)=>{
      console.log(res);
      this.cart = res;
    });

   }

   cart : any;

   removeItem(item){
     let id = this.cart.indexOf(item);

    this.cartService.deleteItem(id).subscribe((res)=>{
      console.log(res);
      this.cart = res;
    })
   }

   item : string;
   quantity : number;
   price : number;

   addItem(){
    let itemToAdd : Item = {
      product: this.item,
      quantity: this.quantity,
      price: this.price
    }

    this.cartService.addToCart(itemToAdd).subscribe((res)=>{
      this.cart=res;
    });
    
   }




   checkoutState : boolean = false;

}
