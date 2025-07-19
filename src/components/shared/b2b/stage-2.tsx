import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { Field } from "../";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Language, useLangStore } from "@/store/lang";
import { useTranslate } from "@/hooks/use-translate";
import { b2bStage2 } from "@/data/b2b.data";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface Props {
  className?: string;
  handleNext: VoidFunction;
  handlePrev: VoidFunction;
}

export const Stage2: FC<Props> = ({ handleNext, handlePrev }) => {
  useScrollTop();

  const lang = useLangStore((state) => state.lang);
  const { control, formState } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
      exit={{ opacity: 0, y: 100 }}
    >
      <h2 className="h2 mb-8">{b2bStage2[useTranslate(lang)].h2}</h2>

      <div className="flex flex-col gap-8">
        <Field
          control={control}
          name={"meeting_objective"}
          error={formState.errors.meeting_objective as FieldError}
          placeholder=""
          label={b2bStage2[useTranslate(lang)].data[0].label}
        />
        <Field
          control={control}
          name={"proposal_description"}
          error={formState.errors.proposal_description as FieldError}
          placeholder=""
          label={b2bStage2[useTranslate(lang)].data[1].label}
        />
        <Field
          control={control}
          name={"government_agency"}
          error={formState.errors.government_agency as FieldError}
          placeholder=""
          label={b2bStage2[useTranslate(lang)].data[2].label}
        />

        <h2 className="h2 mt-4">{b2bStage2[useTranslate(lang)].secondH2}</h2>

        <Field
          control={control}
          name={"sector_industry"}
          error={formState.errors.sector_industry as FieldError}
          placeholder=""
          label={b2bStage2[useTranslate(lang)].data[3].label}
        />
        <Field
          control={control}
          name={"key_services"}
          error={formState.errors.key_services as FieldError}
          placeholder=""
          label={b2bStage2[useTranslate(lang)].data[4].label}
        />
        <Field
          control={control}
          name={"government_experience"}
          error={formState.errors.government_experience as FieldError}
          placeholder=""
          label={b2bStage2[useTranslate(lang)].data[5].label}
        />
      </div>

      <div className="flex items-center gap-6 mt-10">
        <Button
          type="button"
          onClick={handlePrev}
          variant={"outline"}
          className="text-on_surface"
        >
          {lang === Language.RU ? "Назад" : "Back"}
        </Button>

        <Button
          variant={"secondary"}
          type="button"
          onClick={handleNext}
          className="w-full"
        >
          {lang === Language.RU ? "Далее" : "Next"}
        </Button>
      </div>
    </motion.div>
  );
};
