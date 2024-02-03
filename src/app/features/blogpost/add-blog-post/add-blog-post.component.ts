import { Component, OnDestroy } from '@angular/core';
import { AddBlogRequest } from '../models/add-blog-request';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { BlogPostResponse } from '../models/blog-post-response';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent implements OnDestroy {

  addBlogPost: AddBlogRequest;
  private addBlogPostSubscription?: Subscription;

  constructor(private blogPostService: BlogPostService, private router: Router) {
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
  ngOnDestroy(): void {
    this.addBlogPostSubscription?.unsubscribe();
  }

  onFormSubmit(): void {
    this.addBlogPostSubscription = this.blogPostService.createBlogPost(this.addBlogPost)
      .subscribe({
        next: (response: BlogPostResponse) => {
          console.log(response);
          this.router.navigateByUrl('/admin/blogposts');
        },
        error: () => { },
        complete: () => { }
      });
  }

}
