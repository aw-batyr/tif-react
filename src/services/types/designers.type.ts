export interface DesignerImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string | null;
  description: string | null;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}

export interface Achievement {
  ru: string;
  en: string;
}

export interface Designer {
  id: number;
  name: string;
  biography: string;
  created_at: string;
  updated_at: string;
  category_designer_id: number;
  achievements: Achievement[];
  order_id: number;
  image: DesignerImage;
  images: DesignerImage[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  designers: Designer[];
}

export interface DesignersType {
  status: string;
  data: Datum;
}
