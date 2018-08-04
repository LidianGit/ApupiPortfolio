import { Component, OnInit } from '@angular/core';
import {Asset, Entry, EntryCollection} from 'contentful';
import {Router} from '@angular/router';
import {ContentfulService} from '../contentful.service';
import {ContentfulImageLink, Project} from '../common/model/project';
import {MOCK_PROJECTS} from '../../mock/MockProject';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: EntryCollection<Project> = { items: [] } as EntryCollection<Project>;
  assets: Map<string, Asset> = new Map<string, Asset>();

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {

  }


  ngOnInit() {
    this.contentfulService.getAllAssets().then(assets => this.assets = assets);
    this.contentfulService.getProjects().then(projects => {
      this.projects = projects;
      if ( this.projects.items.length < 8 ) {
          this.projects.items = this.projects.items.concat(MOCK_PROJECTS);
        // this.projects.items.push(MOCK_PROJECTS);
      }
    });
  }

  goToProjectDetailsPage(projectId) {
    console.log(projectId);
    this.router.navigate(['/project', projectId]);
    return false;
  }

  hasImageUrl(imageLink: ContentfulImageLink): boolean {
    return this.assets.has(imageLink.sys.id);
  }

  getImageUrl(imageLink: ContentfulImageLink): string {
    const asset = this.assets.get(imageLink.sys.id);
    return 'https:' + asset.fields.file.url;
  }

}
