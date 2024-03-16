import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const glitterVariants = cva("bg-clip-text text-transparent  ", {
    variants: {
        variant: {
            blue: "from-sky-200 via-blue-500 to-indigo-600",
            green: "from-emerald-500 to-emerald-900",
            powder: "from-violet-200 to-pink-200",
            sunset: "from-red-200 via-red-500 to-orange-500",
            mood: "from-violet-600 to-indigo-600",
            crook: "from-custom-sun to-custom-yellow",
            groot: "from-custom-orange to-custom-light-yellow",
        },
        direction: {
            top: "bg-gradient-to-t",
            "top-right": "bg-gradient-to-tr",
            right: "bg-gradient-to-r",
            "bottom-right": "bg-gradient-to-br",
            bottom: "bg-gradient-to-b",
            "bottom-left": "bg-gradient-to-bl",
            left: "bg-gradient-to-l",
            "top-left": "bg-gradient-to-tl",
        },
    },
    defaultVariants: {
        variant: "blue",
        direction: "top",
    },
});

export interface GradientProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof glitterVariants> {}

const Glitter = React.forwardRef<HTMLSpanElement, GradientProps>(
    ({ className, variant, direction, children, ...props }, ref) => {
        const Comp = "span";

        return (
            <Comp
                ref={ref}
                className={cn(
                    glitterVariants({ direction, variant, className }),
                )}
                {...props}>
                {children}
            </Comp>
        );
    },
);

export { Glitter, glitterVariants };
