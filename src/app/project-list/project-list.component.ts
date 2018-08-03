import { Component, OnInit } from '@angular/core';
import {Entry, EntryCollection} from 'contentful';
import {Router} from '@angular/router';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: EntryCollection<any>;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }
  ngOnInit() {
    this.contentfulService.getProjects()
      .then(projects => this.projects = projects);
  }
  goToProjectDetailsPage(projectId) {
    console.log(projectId);
    this.router.navigate(['/project', projectId]);
  }
}
