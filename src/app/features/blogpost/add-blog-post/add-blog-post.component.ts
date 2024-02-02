import { Component } from '@angular/core';
import { AddBlogRequest } from '../models/add-blog-request';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent {
  addBlogPost: AddBlogRequest;
  constructor() {
    this.addBlogPost = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      author: '',
      featuredImageUrl: '',
      isVisible: true
    }
  }

  onFormSubmit(): void {
  }
}
