import { Injectable } from "@angular/core";
import { CartItem } from "../../model/cartitem.model";

@Injectable()
export class CartService {
    private cartData:CartItem[] = [];

    getCartItems() {
        return this.cartData;
    }

    addCartItem(newitem : CartItem) {
        this.cartData.push(newitem);
    }

    deleteCartItem(idx:number) {
        this.cartData.splice(idx, 1);
    }

}