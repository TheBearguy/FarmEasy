import { cn } from "@/lib/utils";
import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
    ({ className, children, ...props }, ref) => {
        const Comp = "div";

        return (
            <Comp ref={ref} className={cn(className)} {...props}>
                {children}
            </Comp>
        );
    },
);

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        const Comp = "section";

        return (
            <Comp ref={ref} className={cn("max-w-full", className)} {...props}>
                {children}
            </Comp>
        );
    },
);

interface WrapperProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Wrapper = React.forwardRef<HTMLSpanElement, WrapperProps>(
    ({ className, children, ...props }, ref) => {
        const Comp = "span";

        return (
            <Comp ref={ref} className={cn("max-w-full", className)} {...props}>
                {children}
            </Comp>
        );
    },
);

interface MainProps extends React.HTMLAttributes<HTMLElement> {}

const Main = React.forwardRef<HTMLElement, MainProps>(
    ({ className, children, ...props }, ref) => {
        const Comp = "main";

        return (
            <Comp
                ref={ref}
                className={cn("min-h-screen", className)}
                {...props}>
                {children}
            </Comp>
        );
    },
);

export { Box, Section, Wrapper, Main };
