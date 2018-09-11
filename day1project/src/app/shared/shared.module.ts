import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MysignComponent } from './mysign/mysign.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MysignComponent],
  exports: [MysignComponent],
  providers: [ProductService, CartService]
})
export class SharedModule { }
