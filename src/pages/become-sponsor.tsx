import { Field, FormSuccesStatus } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatePresence, motion } from "motion/react";
import {
  sponsorDefaultValues,
  sponsorFormSchema,
  SponsorFormType,
} from "@/lib/get-sponsor-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { postSponsor } from "@/services/service";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Cover } from "@/components/layout";
import { Language, useLangStore } from "@/store/lang";
import { stendData } from "@/data/stend.data";
import { useTranslate } from "@/hooks/use-translate";

export default function BecomeSponsor() {
  useScrollTop();

  const lang = useLangStore((state) => state.lang);
  const [success, setSuccess] = useState(false);
  const form = useForm<SponsorFormType>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: sponsorDefaultValues,
  });

  const onSubmit = async (data: SponsorFormType) => {
    try {
      const status = await postSponsor(data);

      if (status) setSuccess(true);
    } catch (error) {
      console.error("POST sponsor error", error);
    }
  };

  const { errors } = form.formState;

  return (
    <div>
      <Cover
        title={lang === Language.RU ? "Стать спонсором" : "Become a sponsor"}
      />

      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] mx-auto px-5 md:mt-20 mt-10 mb-20 md:mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Field
                label={stendData[useTranslate(lang)].label_1}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={stendData[useTranslate(lang)].label_2}
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label={stendData[useTranslate(lang)].label_3}
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label={stendData[useTranslate(lang)].label_4}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={stendData[useTranslate(lang)].label_5}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={stendData[useTranslate(lang)].label_6}
                name="phone"
                control={form.control}
                error={errors.phone}
              />
              <Field
                label={stendData[useTranslate(lang)].label_7}
                name="website"
                control={form.control}
              />

              <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {stendData[useTranslate(lang)].visa}
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"yes"}
                              checked={field.value === "yes"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].visa_radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0 ">
                          <FormControl>
                            <RadioGroupItem
                              value={"no"}
                              checked={field.value === "no"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[useTranslate(lang)].visa_radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button disabled={form.formState.isSubmitting} className="mt-5">
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  stendData[useTranslate(lang)].button
                )}
              </Button>
            </motion.form>
          </Form>
        )}
      </AnimatePresence>

      {success && <FormSuccesStatus delay={0.3} />}
    </div>
  );
}
