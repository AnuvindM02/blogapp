import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/request model interfaces/add-category-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryResponse } from '../models/categoryresponse';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<CategoryResponse> {
    return this.http.post<CategoryResponse>(`${environment.API_BASE_URL}/categories`, model);
  }

  getAllCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(`${environment.API_BASE_URL}/categories`);
  }

  getCategoryById(id: string): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${environment.API_BASE_URL}/categories/${id}`)
  }

  updateCategory(updateRequest: UpdateCategoryRequest, id: string | null): Observable<CategoryResponse> {
    return this.http.put<CategoryResponse>(`${environment.API_BASE_URL}/categories/${id}`, updateRequest)
  }

  deleteCategory(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.API_BASE_URL}/categories/${id}`)
  }
}
