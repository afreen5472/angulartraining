import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories : Category[] = [];
  frmcategory:Category = new Category(null,null);
  constructor(private cs:CategoryService) { }

  ngOnInit() {
    this.cs.getCategories().subscribe(data => this.categories, error => console.log("error"));
  }

  add() {
    this.cs.addCategory(this.frmcategory).subscribe(
      (data) => { console.log("Add success!") 
      this.categories.push(data);
      },
      (error) => { console.log("error", error)
      }
    )
  }
  delete(id:number) {
    this.cs.deleteCategory(id).subscribe(
      (data)=>{
        console.log("delete succces");
        let idx = this.categories.findIndex((e) => e.id == id)
        this.categories.splice(idx, 1);
      }, (err) => {
        console.log("delet error", err);
      }
    )
  }

  edit(selCategpry: Category) {
    //this.frmcategory = selCategpry
    Object.assign(this.frmcategory, selCategpry);
  }
  
  update() {
    this.cs.updateCategory(this.frmcategory).subscribe(
      (data) => {
        console.log("success!");
        let idx = this.categories.findIndex((e)=> e.id == data.id)
        this.categories[idx] = data;
      }, (err) => {
        console.log("error", err);
      }
    )
  }
}
