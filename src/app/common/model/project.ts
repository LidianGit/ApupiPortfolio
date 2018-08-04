import {ContentTypeLink, Sys} from 'contentful';

export interface Project {
  title: string;
  subTitle: string;
  author: string;
  creationDate: string;
  description: string;
  mainImage: ContentfulImageLink;
  images: Array<ContentfulImageLink>;
  tags: Array<string>;
}

export interface ContentfulImageLink {
  sys: ContentTypeLink;
}
