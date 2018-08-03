import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentfulService} from '../contentful.service';
import {Asset, AssetCollection, Entry} from 'contentful';
import {ContentfulImageLink, Project} from '../common/model/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Entry<Project>;
  // assets: Map<string, Asset>;

  assets: Array<Asset>;
  slides = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }
  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getProject(projectId).then((project) => {
      this.project = project;
      const imageIds = [];
      this.project.fields.images.forEach(imageLink => {
        imageIds.push(imageLink.sys.id);
      });
      this.contentfulService.getAssets(imageIds.join(','))
        .then(assets => {
          this.assets = assets;
          this.assets.forEach(asset => {
            this.addSlide(asset);
          });
        });
    });
  }


  addSlide(asset: Asset): void {
    this.slides.push({
      image: 'https:' + asset.fields.file.url
    });
  }
  // getAsset(imageLink: ContentfulImageLink): Asset {
  //   return this.assets.get(imageLink.sys.id);
  // }

  // getImageUrl(imageLink: ContentfulImageLink): string {
  //   const asset = this.assets.get(imageLink.sys.id);
  //   return 'https:' + asset.fields.file.url;
  // }

  goToList() {
    this.router.navigate(['/projects']);
  }
}
