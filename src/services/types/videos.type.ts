type VideoFile = {
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
};

type VideoItem = {
  id: number;
  category_video_media_id: number;
  name: string;
  created_at: string;
  updated_at: string;
  sections: string[] | string; // может быть строкой или массивом строк
  fashion_shows_order_id: number;
  title: string;
  text: string;
  video: VideoFile;
  video_photo: VideoFile;
};

type TurkmentextileData = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  videos: VideoItem[];
};

export type VideoTypes = {
  status: "success" | "error";
  data: TurkmentextileData;
};
