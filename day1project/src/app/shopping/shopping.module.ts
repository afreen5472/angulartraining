import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingComponent, CartitemsComponent, ProductsComponent],
  exports: [CartitemsComponent, ProductsComponent]
})
export class ShoppingModule { 

  constructor() {
    console.log("ShoppingModule constructor");
  }
}
