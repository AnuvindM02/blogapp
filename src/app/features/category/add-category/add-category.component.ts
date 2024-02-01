import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/request model interfaces/add-category-request';
import { CategoryService } from '../services/category.service';
import { CategoryResponse } from '../models/categoryresponse';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService, private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() {
    this.addCategorySubscription = this.categoryService.addCategory(this.model).subscribe({
      next: (response: CategoryResponse) => {
        this.router.navigateByUrl('/admin/categories');
      },
      error: () => { },
      complete: () => { }
    });
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
