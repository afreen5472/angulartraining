import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MysignComponent } from './mysign/mysign.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginGuard } from './services/login.guard';

@NgModule({
  declarations: [MysignComponent],
  exports: [MysignComponent],
  providers: [ProductService, CartService, LoginGuard],
  imports: [CommonModule, HttpClientModule]
})
export class SharedModule { }
