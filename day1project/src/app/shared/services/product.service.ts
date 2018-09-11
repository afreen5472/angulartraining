import { Injectable } from "@angular/core";
import { Product } from "../../model/product.model";


@Injectable()
export class ProductService {
    private productsData:Product[] = [];

    constructor() {
        this.productsData = [new Product(1, "Test1", 400, "testDesc1"), 
            new Product(2, "Test2", 500, "testDesc2"),
            new Product(3, "Test3", 200, "testDesc3")];
    }

    getProducts() {
        return this.productsData;
    }
}