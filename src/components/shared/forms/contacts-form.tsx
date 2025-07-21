import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import { Field } from "../field";
import { Button } from "@/components/ui/button";
import {
  ContactsFormType,
  contactsSchema,
  defaultValuesContacts,
} from "@/lib/get-contacts-form-details";
import { postContact } from "@/services/service";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const ContactsForm: FC<Props> = ({ className }) => {
  const { t } = useTranslation("contacts");

  const [success, setSuccess] = useState(false);
  const form = useForm({
    resolver: zodResolver(contactsSchema),
    defaultValues: defaultValuesContacts,
  });

  async function onSubmit(data: ContactsFormType) {
    try {
      const status = await postContact(data);

      setSuccess(status);
    } catch (error) {
      console.error("POST contact", error);
    }
  }

  const { errors } = form.formState;

  return (
    <div
      className={cn("bg-surface_container rounded-[8px] py-8 px-6 ", className)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="h2 lg:mb-8 mb-6">{t("title")}</h2>

          <div className="flex flex-col gap-8">
            <Field
              name="name"
              control={form.control}
              label={t("name")}
              error={errors.name}
            />

            <div className="flex flex-col lg:flex-row gap-6">
              <Field
                name="email"
                control={form.control}
                label="Email"
                error={errors.email}
              />
              <Field
                name="phone"
                control={form.control}
                label={t("phone")}
                error={errors.phone}
              />
            </div>

            <Field
              name="company"
              control={form.control}
              label={t("company")}
              error={errors.name}
            />
            <Field
              textArea
              name="msg"
              label={t("message")}
              control={form.control}
              error={errors.msg}
            />
            <Button
              disabled={form.formState.isSubmitting || success}
              className="w-full h-12 overflow-hidden"
              variant="secondary"
            >
              {success ? (
                t("submitted")
              ) : form.formState.isSubmitting ? (
                <Loader2 className="animate-spin text-white" />
              ) : (
                t("button")
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
