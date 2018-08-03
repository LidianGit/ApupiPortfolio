import {ContentTypeLink, Sys} from 'contentful';

export interface Project {
  title: string;
  subTitle: string;
  creationDate: string;
  description: string;
  images: Array<ContentfulImageLink>;
  tags: Array<string>;
}

export interface ContentfulImageLink {
  sys: ContentTypeLink;
}
