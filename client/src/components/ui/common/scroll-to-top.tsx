import React, { useState, useEffect } from "react";
import { FaChevronUp } from "@/icons";
import { cn } from "@/lib/utils";

import { Button } from "@components/common/button";

interface ScrollToTopProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ScrollToTop = React.forwardRef<
    HTMLButtonElement,
    ScrollToTopProps
>(({ className, children, ...props }, ref) => {
    const [showBtn, setShowBtn] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.scrollY > 10) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Button
            ref={ref}
            className={cn(
                "bg-custom-border active:bg-custom-border focus:bg-custom-border hover:bg-custom-color fixed bottom-6 right-6 z-50 box-border flex aspect-square h-9 cursor-pointer items-center justify-center rounded-md p-0 duration-300 ease-in-out hover:animate-bounce",
                showBtn ? "opacity-100" : "pointer-events-none opacity-0",
                className,
            )}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            {...props}>
            <FaChevronUp className="text-2xl text-black" />
            {children}
        </Button>
    );
});
