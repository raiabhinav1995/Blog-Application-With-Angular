import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //A simple blog varaible
  public allBlogs=
  [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:37.854Z",
      "created": "2017-10-20T12:20:37.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is the body of blog",
      "description": "This is a sample description",
      "title": "This is blog 1",
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-20T12:20:37.854Z",
      "created": "2017-10-20T12:20:37.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is the body of blog",
      "description": "This is a sample description",
      "title": "This is blog 1",
    },
    {
      "blogId": "3",
      "lastModified": "2017-10-20T12:20:37.854Z",
      "created": "2017-10-20T12:20:37.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "This is the body of blog",
      "description": "This is a sample description",
      "title": "This is blog 1",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
