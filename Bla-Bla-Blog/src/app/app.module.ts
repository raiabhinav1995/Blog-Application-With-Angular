import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importig Router
import {RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

//Service for the app
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot
    (
      [
        {path:'home',component:HomeComponent},
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'about',component:AboutComponent},
        {path:'blog/:blogId',component:BlogViewComponent},
        {path:'create',component:BlogCreateComponent},
        {path:'edit/:blogId',component:HomeComponent},
        {path:'**',component:NotFoundComponent}
      ]
    )
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
