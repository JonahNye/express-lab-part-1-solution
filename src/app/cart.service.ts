import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http : HttpClient) { }

  getCart(){
    return this.http.get("http://localhost:8000/cart")
  }

  addToCart(itemToAdd){
    console.log(itemToAdd);
    return this.http.post("http://localhost:8000/cart", itemToAdd);
  }

  deleteItem(id: number){
    console.log(id);
    return this.http.delete(`http://localhost:8000/cart/${id}`)
  }
}
