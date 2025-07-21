import * as React from "react";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return type !== "file" ? (
      <input
        type={type}
        className={cn("input", className)}
        ref={ref}
        {...props}
      />
    ) : (
      <div className="relative w-[160px] h-9 overflow-hidden !cursor-pointer">
        <input
          ref={ref}
          accept=".pdf, .png, .jpeg, .jpg"
          type={type}
          className={cn(
            "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
          )}
          {...props}
        />
        <div className="absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container">
          <Upload className="cursor-pointer" size={16} /> Upload file
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
