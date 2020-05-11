import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
