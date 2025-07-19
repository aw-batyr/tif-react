export interface HomeContactsType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  title: string;
  text: string;
  created_at: Date;
  updated_at: Date;
  image: HomeContImage;
}

export interface HomeContImage {
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
  translations: any[];
}
