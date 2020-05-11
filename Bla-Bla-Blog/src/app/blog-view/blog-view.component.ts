import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
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


  constructor(private _route:ActivatedRoute, private route:Router) 
  {

  }

  ngOnInit(): void 
  {
    let myblogId=this._route.snapshot.paramMap.get('blogId')
    this.getSingleBlogInformation(myblogId);
  }
  getSingleBlogInformation(currentBlogId) {
    for(let blog of this.allBlogs)
    {
      if(blog.blogId==currentBlogId)
      {
        this.currentBlog=blog;
      }      
    }
  }

}
