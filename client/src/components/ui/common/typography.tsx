import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const typographyVariants = cva("text-xl", {
    variants: {
        variant: {
            h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            h2: "scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0",
            h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
            h4: "scroll-m-20 text-xl font-semibold tracking-tight",
            h5: "scroll-m-20 text-lg font-medium tracking-normal",
            h6: "scroll-m-20 text-base font-normal tracking-normal",
            p: "leading-7 [&:not(:first-child)]:mt-6",
            // blockquote: "mt-6 border-l-2 pl-6 italic",
            // list: "my-6 ml-6 list-disc [&>li]:mt-2",
        },
        affects: {
            default: "",
            lead: "text-xl text-muted-foreground",
            large: "text-lg font-semibold",
            small: "text-sm font-medium leading-none",
            muted: "text-sm text-muted-foreground",
            removePMargin: "[&:not(:first-child)]:mt-0",
        },
    },
    defaultVariants: {
        variant: "h1",
        affects: "default",
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
    ({ className, variant, affects, ...props }, ref) => {
        const Comp = variant || "p";
        return (
            <Comp
                ref={ref}
                className={cn(
                    typographyVariants({ variant, affects, className }),
                )}
                {...props}
            />
        );
    },
);
Typography.displayName = "H1";

export default Typography;
export { Typography, typographyVariants };
