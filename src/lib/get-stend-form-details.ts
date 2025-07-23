import { z } from "zod";

export type StandFormType = z.infer<typeof standFormSchema>;

export const standFormSchema = z.object({
  selection_option: z.string(),

  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),

  representative_name: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),

  position_title: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),

  participants_count: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Укажите количество участников")
  ),

  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),

  email: z.string().email({ message: "Укажите корректный email" }),

  phone_number: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),

  website: z.string().optional(),

  visa_support: z.boolean().optional(),
});

export const standDefaultValues = {
  selection_option: "space",
  company_name: "",
  representative_name: "",
  position_title: "",
  participants_count: 1,
  country: "",
  email: "",
  phone_number: "",
  website: "",
  visa_support: true,
};
