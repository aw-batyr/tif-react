export interface PhotoTypes {
  status: string;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  photos: PhotoElement[];
}

export interface PhotoElement {
  id: number;
  category_photo_media_id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  photo: PhotoPhoto;
}

export interface PhotoPhoto {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: ContentType;
  title: null;
  description: null;
  field: Field;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: Extension;
}

export enum ContentType {
  ImageWebp = "image/webp",
}

export enum Extension {
  Webp = "webp",
}

export enum Field {
  Photo = "photo",
}
