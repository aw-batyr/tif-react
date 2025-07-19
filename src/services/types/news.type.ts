export interface NewsType {
  status: string;
  data: NewsDatum[];
  pagination: Pagination;
}

export interface NewsDatum {
  id: number;
  title: string;
  content: string;
  published_at: string;
  featured_images: FeaturedImage[];
  translations: any[];
}

export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
}

export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface NewsInnerType {
  status: string;
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  content: string;
  published_at: string;
  featured_images: FeaturedImage[];
  translations: any[];
}

export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
}
