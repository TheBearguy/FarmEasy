import React, { Suspense } from "react";
import { Spinner } from "@components/common/spinner";

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Suspense
            fallback={
                <Spinner className="bg-rich-black-900 flex min-h-screen items-center justify-center" />
            }>
            {children}
        </Suspense>
    );
};

export { Loading };
export default Loading;
