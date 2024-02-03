import { Injectable } from '@angular/core';
import { AddBlogRequest } from '../models/add-blog-request';
import { Observable, tap } from 'rxjs';
import { BlogPostResponse } from '../models/blog-post-response';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(addBlogPost: AddBlogRequest): Observable<BlogPostResponse> {
    return this.http.post<BlogPostResponse>(`${environment.API_BASE_URL}/blogposts`, addBlogPost);
  }

  getAllBlogPosts(): Observable<BlogPostResponse[]> {
    return this.http.get<BlogPostResponse[]>(`${environment.API_BASE_URL}/blogposts`);
  }


}
