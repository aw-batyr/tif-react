export interface ParticipantsType {
  status: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  participants: Participant[];
}

export interface Participant {
  id: number;
  name: string;
  about: string;
  country: string;
  participant_category_id: number;
  created_at: Date;
  updated_at: Date;
  image: Image | null;
  image_country: Image | null;
}

export interface Image {
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
  ImagePNG = "image/png",
}

export enum Extension {
  PNG = "png",
}

export enum Field {
  Image = "image",
  ImageCountry = "image_country",
}
