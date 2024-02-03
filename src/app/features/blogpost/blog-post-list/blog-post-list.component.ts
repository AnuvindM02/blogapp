import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPostResponse } from '../models/blog-post-response';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {

  blogPosts$?: Observable<BlogPostResponse[]>;
  blogPosts?: BlogPostResponse[];

  constructor(private blogPostService: BlogPostService) {

  }

  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }

  // this.blogPostService.getAllBlogPosts().subscribe({
  //   next: (response) => {
  //     console.log(response);
  //   },
  //   error: (error) => {
  //     console.log('error');
  //     console.log(error);
  //   },
  //   complete: () => { }
  // });
  // }

}
