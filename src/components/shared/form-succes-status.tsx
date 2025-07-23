import { FC } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  delay?: number;
}

export const FormSuccesStatus: FC<Props> = ({ className, delay = 0.15 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { delay: delay } }}
      className={cn("flex flex-col gap-8 mt-16", className)}
    >
      <h3 className="text-3xl text-center">Форма успешно отправлена!</h3>

      <Link className="w-fit mx-auto" to="/">
        <Button variant={"outline"}>Вернуться на главную</Button>
      </Link>
    </motion.div>
  );
};
