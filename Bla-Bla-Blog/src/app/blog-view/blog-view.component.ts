import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  

  constructor(private _route:ActivatedRoute, private route:Router,public blogservice:BlogService) 
  {

  }

  ngOnInit(): void 
  {
    let myblogId=this._route.snapshot.paramMap.get('blogId')
    this.currentBlog=this.blogservice.getSingleBlogInformation(myblogId);
  }

}
