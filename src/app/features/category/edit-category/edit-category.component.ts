import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { CategoryResponse } from '../models/categoryresponse';
import { UpdateCategoryRequest } from '../models/update-category-request';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;//To close subscription
  editFormSubscription?: Subscription;
  updateFormSubscription?: Subscription;
  deleteFormSubscription?: Subscription;

  updateCategoryRequest: UpdateCategoryRequest;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.updateCategoryRequest = { id: '', name: '', urlHandle: '' }; // Initialize with default values
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          this.editFormSubscription = this.categoryService.getCategoryById(this.id).subscribe({
            next: (response: CategoryResponse) => {
              this.updateCategoryRequest.id = response.id;
              this.updateCategoryRequest.name = response.name;
              this.updateCategoryRequest.urlHandle = response.urlHandle;
            },
            error: () => { },
            complete: () => { }
          });
        }
      },
      error: () => { },
      complete: () => { }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editFormSubscription?.unsubscribe();
    this.deleteFormSubscription?.unsubscribe();
  }

  onFormSubmit(): void {
    this.updateFormSubscription = this.categoryService.updateCategory(this.updateCategoryRequest, this.id)
      .subscribe({
        next: (response: UpdateCategoryRequest) => {
          this.router.navigateByUrl('/admin/categories');
        },
        error: () => { },
        complete: () => { }
      });
  }

  onDelete(): void {
    if (this.id) {
      this.deleteFormSubscription = this.categoryService.deleteCategory(this.id)
        .subscribe({
          next: (response: boolean) => {
            this.router.navigateByUrl('/admin/categories')
          },
          error: () => { },
          complete: () => { }
        });
    }
  }

}
