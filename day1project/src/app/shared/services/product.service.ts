import { Injectable } from "@angular/core";
import { Product } from "../../model/product.model";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ProductService {
    private productsData:Product[] = [];
    restUrl = "http://localhost:3000/wsproducts";
    constructor(private http : HttpClient) {
        // this.productsData = [new Product(1, "Test1", 400, "testDesc1", 1), 
        //     new Product(2, "Test2", 500, "testDesc2", 2),
        //     new Product(3, "Test3", 200, "testDesc3", 3)];

    }

    getProducts() {
        //return this.productsData;
        return this.http.get<Product[]>(this.restUrl);
    }
}