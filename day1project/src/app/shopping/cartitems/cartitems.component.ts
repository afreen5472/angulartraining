import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cartitem.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  cartItems: CartItem[] = [];
  constructor(private cs:CartService) { }

  ngOnInit() {
    //console.log(this.cartItems);
    this.cartItems = this.cs.getCartItems();
  }

  totalAmount() {
    let tot = 0;
    for(let i of this.cartItems) {
      tot += (i.price * i.quantity);
    }
    return tot;
  }
  removeFromCart(idx:number) {
    this.cs.deleteCartItem(idx);
  }
}
