import { motion } from "motion/react";

import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Field } from "../field";
import { b2bStage1 } from "@/data/b2b.data";
import { useTranslate } from "@/hooks/use-translate";
import { Language, useLangStore } from "@/store/lang";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface Props {
  className?: string;
  handleNext: VoidFunction;
}

export const Stage1: FC<Props> = ({ handleNext }) => {
  useScrollTop();
  const { control, formState } = useFormContext();
  const lang = useLangStore((state) => state.lang);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%", transition: { duration: 0.2 } }}
      className="w-full"
    >
      <h2 className="h2 mb-8">{b2bStage1[useTranslate(lang)].h2}</h2>

      <div className="flex flex-col gap-8">
        <FormField
          defaultValue={1}
          control={control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-xl">
                {lang === Language.RU ? "Тип:" : "Type:"}
              </FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={"B2B"}
                        checked={field.value === "B2B"}
                      />
                    </FormControl>
                    <FormLabel className="text-base">B2B</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={"B2G"}
                        checked={field.value === "B2G"}
                      />
                    </FormControl>
                    <FormLabel className="text-base">B2G</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <Field
          control={control}
          name={"company_name"}
          error={formState.errors.company_name as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[0].label}
        />
        <Field
          control={control}
          name={"representative_name"}
          error={formState.errors.representative_name as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[1].label}
        />
        <Field
          control={control}
          name={"position_title"}
          error={formState.errors.position_title as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[2].label}
        />
        <Field
          type="number"
          control={control}
          name={"participants_count"}
          error={formState.errors.participants_count as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[3].label}
        />
        <Field
          control={control}
          name={"country"}
          error={formState.errors.country as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[4].label}
        />
        <Field
          control={control}
          name={"email"}
          error={formState.errors.email as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[5].label}
        />
        <Field
          control={control}
          name={"phone_number"}
          error={formState.errors.phone_number as FieldError}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[6].label}
        />
        <Field
          control={control}
          name={"website"}
          placeholder=""
          label={b2bStage1[useTranslate(lang)].data[7].label}
        />
      </div>

      <Button
        variant={"secondary"}
        type="button"
        onClick={handleNext}
        className="w-full mt-10"
      >
        {lang === Language.RU ? "Далее" : "Next"}
      </Button>
    </motion.div>
  );
};
