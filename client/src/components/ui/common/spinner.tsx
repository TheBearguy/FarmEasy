import { ColorRing } from "react-loader-spinner";
import { cn } from "@/lib/utils";
import React from "react";

import { Box } from "@components/common/containers";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, BoxProps>(
    ({ className, color, children, ...props }, ref) => {
        const currColor = color || "#000000";

        return (
            <Box className={cn(className)} {...props} ref={ref}>
                <ColorRing
                    colors={[
                        currColor,
                        currColor,
                        currColor,
                        currColor,
                        currColor,
                    ]}
                />
                {children}
            </Box>
        );
    },
);

export { Spinner };
