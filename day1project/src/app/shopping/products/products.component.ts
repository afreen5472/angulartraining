import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { CartItem } from '../../model/cartitem.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[] = [];
  constructor(private ps:ProductService, private csp:CartService) { }

  ngOnInit() {
    this.products = this.ps.getProducts();
  }

  addProductsToCart(selProd : Product): void {
    let newItem = new CartItem(selProd.id,selProd.name, selProd.price, 1);
    this.csp.addCartItem(newItem);
  }

}
