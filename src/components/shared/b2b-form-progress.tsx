import { cn } from "@/lib/utils";
import { FC } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  className?: string;
  stage: number;
}

export const B2bFormProgress: FC<Props> = ({ className, stage }) => {
  const md = useMediaQuery("(min-width: 768px");

  return (
    <div className={className}>
      <div className="max-w-[808px] md:mx-auto my-20 mx-5">
        <div className="relative h-14 w-full">
          <div
            className={cn(
              "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
            )}
          />
          <motion.div
            initial={{
              width: 0,
            }}
            animate={
              stage === 2 ? { width: "20%" } : stage === 3 && { width: "75%" }
            }
            transition={{ delay: 0.5, duration: 0.5 }}
            className={cn(
              "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
              {
                "w-0 bg-opacity-0": stage === 1,
                "w-[20%]": stage === 2,
                "w-[75%]": stage === 3,
              }
            )}
          />
          <motion.div
            initial={{
              width: md ? "50%" : "35%",
            }}
            animate={
              stage === 2 ? { width: "75%" } : stage === 3 && { width: "100%" }
            }
            className={cn(
              "bg-reverse_primary w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
              //   stage === 2 ? "w-[75%]" : stage === 3 && "w-full"
            )}
          />

          <motion.div
            className={cn(
              "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
              {
                "bg-reverse_primary md:left-1/2 left-1/3": stage === 1,
                "bg-primary left-[20%] !text-on_primary":
                  stage === 2 || stage === 3,
              }
            )}
          >
            1
          </motion.div>
          <div
            className={cn(
              "progress-circle absolute -top-6 right-[17%] transition-all -translate-x-1/2 flex items-center justify-center",
              {
                "bg-[#D0D3D8]": stage === 1,
                "bg-reverse_primary": stage === 2,
                "bg-primary !text-on_primary": stage === 3,
              }
            )}
          >
            2
          </div>
          <div
            className={cn(
              "progress-circle absolute -top-6 right-0 transition-all duration-500 flex items-center justify-center",
              {
                "bg-[#D0D3D8]": stage === 1 || stage === 2,
                "bg-reverse_primary": stage === 3,
              }
            )}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};
