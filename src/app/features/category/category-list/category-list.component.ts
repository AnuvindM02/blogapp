import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryResponse } from '../models/categoryresponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories$?: Observable<CategoryResponse[]>;
  categories?: CategoryResponse[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }
}
