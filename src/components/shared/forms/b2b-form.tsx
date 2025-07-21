import { AnimatePresence } from "motion/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  defaultValuesOfB2b,
  formSchema,
  FormType,
} from "@/lib/get-b2b-form-details";
import { Form } from "@/components/ui/form";
import { FormSuccesStatus } from "../form-succes-status";
import { Stage1, Stage2, Stage3 } from "../b2b";

interface Props {
  stage: number;
  setStage: (i: number | any) => void;

  success: boolean;
  setSuccess: (status: boolean) => void;
}

export const B2bForm: FC<Props> = ({
  stage,
  setStage,
  success,
  setSuccess,
}) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValuesOfB2b,
    mode: "onChange",
  });

  const getFieldsForStage = (currentStage: number): (keyof FormType)[] => {
    switch (currentStage) {
      case 1:
        return [
          "type",
          "company_name",
          "representative_name",
          "job_title",
          "participants_number",
          "country",
          "email_address",
          "phone_number",
          "website",
        ];
      case 2:
        return [
          "meeting_objective",
          "proposal_description",
          "government_agency",
          "sector_industry",
          "key_services",
          "government_experience",
        ];
      case 3:
        return [
          "preferred_meeting_datetime",
          "meeting_mode",
          "language_preference",
          "technical_requirements",
          "company_profile",
          "proposal_presentation",
          "relevant_certification",
        ];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStage(stage);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid) {
      setStage((prev: number) => prev + 1);
    }
  };

  const handlePrev = () => setStage((prev: number) => prev - 1);

  const onSubmit = async (values: FormType) => {
    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value !== undefined) {
          formData.append(key, value as string);
        }
      });

      const res = await axios.post(
        "https://tif.turkmenexpo.com/app/api/v1/form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Ошибка при отправке B2B формы:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative">
          <AnimatePresence>
            {stage === 1 && <Stage1 handleNext={handleNext} />}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 2 && (
              <Stage2 handleNext={handleNext} handlePrev={handlePrev} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 3 && success === false && (
              <Stage3 handlePrev={handlePrev} />
            )}
          </AnimatePresence>

          {success && <FormSuccesStatus />}
        </div>
      </form>
    </Form>
  );
};
