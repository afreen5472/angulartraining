import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http"
import { Category } from "../../model/category.model";


@Injectable()
export class CategoryService {
    private categoryData : Category[] = [];
    private restUrl = "http://localhost:3000/wscategories";
    constructor(private http: HttpClient) {}

    getCategories() {
        return this.http.get<Category[]>(this.restUrl);
    }
    addCategory(newCatgy : Category) {
        return this.http.post<Category>(this.restUrl, newCatgy);
    }
    deleteCategory(id:number) {
        return this.http.delete(this.restUrl+"/"+id);
    }
}