import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs;
  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
    this.allBlogs=this.blogservice.getAllBlogs()
  }

}
