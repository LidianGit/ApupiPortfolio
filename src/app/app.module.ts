import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import {CarouselModule} from 'ngx-bootstrap';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full'},
  { path: 'projects', component: ProjectListComponent},
  { path: 'project/:id', component: ProjectDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    MdToHtmlPipe,
    ImageGalleryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
