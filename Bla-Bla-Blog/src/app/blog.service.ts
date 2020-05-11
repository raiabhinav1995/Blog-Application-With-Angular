import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  currentBlog;
  allBlogs =
    [
      {
        "blogId": "1",
        "lastModified": "2017-10-21T21:47:51.678Z",
        "created": "2017-10-21T21:47:51.678Z",
        "tags": [],
        "author": "Admin",
        "category": "Comedy",
        "isPublished": true,
        "views": 0,
        "bodyHTML": "<h1>This is a dummy blog</h1>",
        "description": "This is a dummy description",
        "title": "This is a dummy title"
      }, {
        "blogId": "2",
        "lastModified": "2017-10-21T21:47:51.678Z",
        "created": "2017-10-21T21:47:51.678Z",
        "tags": [],
        "author": "Admin",
        "category": "Comedy",
        "isPublished": true,
        "views": 0,
        "bodyHTML": "<h1>This is a dummy blog</h1>",
        "description": "This is a dummy description",
        "title": "This is a dummy title"
      }, {
        "blogId": "3",
        "lastModified": "2017-10-21T21:47:51.678Z",
        "created": "2017-10-21T21:47:51.678Z",
        "tags": [],
        "author": "Admin",
        "category": "Comedy",
        "isPublished": true,
        "views": 0,
        "bodyHTML": "<h1>This is a dummy blog</h1>",
        "description": "This is a dummy description",
        "title": "This is a dummy title"
      }
    ]
    public getAllBlogs():any
    {
      return this.allBlogs;
    }
    public getSingleBlogInformation(currentBlogId)
    {
      for(let blog of this.allBlogs)
      {
        if(currentBlogId==blog.blogId)
        {
          return blog;
        }
      }
    }

  constructor() { }
}
