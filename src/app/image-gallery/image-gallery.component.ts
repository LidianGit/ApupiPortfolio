import {Component, Input, OnInit} from '@angular/core';
import {Asset} from 'contentful';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  @Input()
  slides = [];
  activeSlideIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
