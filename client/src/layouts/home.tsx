import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <main className="relative">
            <main className="[&>*]:font-sans">
                <Outlet />
                {children}
            </main>
        </main>
    );
};

export default MainLayout;
