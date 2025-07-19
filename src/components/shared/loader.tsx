import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { FC } from "react";
import { Container } from "../layout";

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <Container
      className={cn(
        "w-full py-20 h-full flex items-center justify-between",
        className
      )}
    >
      <Loader2 className="animate-spin mx-auto text-primary size-16" />
    </Container>
  );
};
