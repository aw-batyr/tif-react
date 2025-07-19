import { Cover } from "@/components/layout";
import { B2bFormProgress } from "@/components/shared";
import { B2bForm } from "@/components/shared/forms/b2b-form";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Language, useLangStore } from "@/store/lang";
import { useState } from "react";

export default function B2b() {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  const [stage, setStage] = useState(1);
  const [success, setSuccess] = useState(false);

  return (
    <div className={"pb-[120px]"}>
      <Cover
        title={
          lang === Language.RU ? "B2B | B2G встречи" : "B2B | B2G meetings"
        }
      />

      {!success && stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="max-w-[808px] md:mx-auto mx-5">
        <B2bForm
          success={success}
          setSuccess={setSuccess}
          stage={stage}
          setStage={setStage}
        />
      </div>
    </div>
  );
}
