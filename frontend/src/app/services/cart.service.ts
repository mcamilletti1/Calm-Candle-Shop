import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Candle } from '../shared/models/Candle';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(candle:Candle):void{
    let cartItem = this.cart.items.find(item => item.candle.id == candle.id)
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(candle));
    this.setCartToLocalStorage();
  }

  removeFromCart(candleId:string):void{
    this.cart.items = this.cart.items.filter(item => item.candle.id != candleId);
    this.setCartToLocalStorage();
  }

  changeQuantity(candleId:string, quantity:number){
    let cartItem = this.cart.items.find(item => item.candle.id === candleId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.candle.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
