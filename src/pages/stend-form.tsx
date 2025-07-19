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
  standDefaultValues,
  standFormSchema,
  StandFormType,
} from "@/lib/get-stend-form-details";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { Cover } from "@/components/layout";
import { postStend } from "@/services/service";
import { stendData } from "@/data/stend.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";

export default function StendForm() {
  const lang = useLangStore((state) => state.lang);
  const [success, setSuccess] = useState(false);
  const form = useForm<StandFormType>({
    resolver: zodResolver(standFormSchema),
    defaultValues: standDefaultValues,
  });

  const onSubmit = async (data: StandFormType) => {
    const status = await postStend(data);

    if (status) setSuccess(true);
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  const { errors } = form.formState;

  const translate = useTranslate(lang);

  return (
    <div>
      <Cover title={stendData[useTranslate(lang)].cover} />

      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] px-5 mx-auto mt-20 mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="space_package"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {stendData[translate].h2}
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
                              value={"space"}
                              checked={field.value === "space"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[translate].radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={"package"}
                              checked={field.value === "package"}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {stendData[translate].radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Field
                label={stendData[translate].label_1}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={stendData[translate].label_2}
                name="rep_name"
                control={form.control}
                error={errors.rep_name}
              />
              <Field
                label={stendData[translate].label_3}
                name="job_title"
                control={form.control}
                error={errors.job_title}
              />
              <Field
                label={stendData[translate].number_of_participants}
                type="number"
                name="participants_number"
                control={form.control}
                error={errors.participants_number}
              />
              <Field
                label={stendData[translate].label_4}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={stendData[translate].label_5}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={stendData[translate].label_6}
                name="phone"
                control={form.control}
                error={errors.phone}
              />

              <Field
                label={stendData[translate].label_7}
                name="website"
                control={form.control}
              />

              <FormField
                control={form.control}
                name="visa_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {stendData[translate].visa}
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
                            {stendData[translate].visa_radio}
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
                            {stendData[translate].visa_radio_2}
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
                  stendData[translate].button
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
