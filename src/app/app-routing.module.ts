import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogPostListComponent } from './features/blogpost/blog-post-list/blog-post-list.component';
import { AddBlogPostComponent } from './features/blogpost/add-blog-post/add-blog-post.component';

const routes: Routes = [
  { path: "admin/categories", component: CategoryListComponent },
  { path: "admin/categories/add", component: AddCategoryComponent },
  { path: "admin/categories/edit/:id", component: EditCategoryComponent },
  { path: "admin/blogposts", component: BlogPostListComponent },
  { path: "admin/blogposts/add", component: AddBlogPostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
