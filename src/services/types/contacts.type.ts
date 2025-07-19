export interface ContactsPageType {
  status: string;
  data: Data;
}

export interface Data {
  id: number;
  header: string;
  info: Info[];
  created_at: Date;
  updated_at: Date;
  translations: Translation[];
}

export interface Info {
  title_address_tm: string;
  address_tm: string;
  title_address_ru: string;
  address_ru: string;
  title_address_en: string;
  address_en: string;
  address_image: string;
  title_phone_tm: string;
  phone_numbers: string;
  title_phone_ru: string;
  title_phone_en: string;
  phone_image: string;
  title_fax_tm: string;
  fax: string;
  title_fax_ru: string;
  title_fax_en: string;
  fax_image: string;
  title_email_tm: string;
  email: string;
  title_email_ru: string;
  title_email_en: string;
  email_image: string;
}

export interface Translation {
  id: number;
  locale: string;
  model_id: string;
  attribute_data: string;
}
