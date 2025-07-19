import { z } from "zod";

export type ContactsFormType = z.infer<typeof contactsSchema>;

export const contactsSchema = z.object({
  name: z.string().min(2, "error"),
  email: z.string().email(),
  phone: z.string().min(8, "error"),
  company: z.string().min(2, "error"),
  msg: z.string().min(5, "error"),
});

export const defaultValuesContacts = {
  name: "",
  email: "",
  phone: "",
  company: "",
  msg: "",
};
