import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-[18px] leading-[140%] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-on_primary shadow hover:bg-primary/90",
        teritary: "bg-teritary hover:bg-teritary/90 text-on_surface",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-outline text-on_surface",
        secondary:
          "bg-secondary_container hover:bg-secondary_container/80 text-on_secondary_container",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-white h-8",
      },
      size: {
        default: "h-12 px-5 py-2 rounded-[2px]",
        sm: "h-10 text-base px-4 rounded-[2px]",
        lg: "lg:h-[88px] h-12 rounded-[2px] px-8 ",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, children, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {!loading ? children : <Loader2 className="w-5 h-5 animate-spin" />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
