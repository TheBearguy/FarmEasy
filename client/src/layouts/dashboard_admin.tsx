import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderAdmin, SidebarAdmin } from "@components/core/index";

import { Box } from "@components/common/containers";

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <main className="relative">
            <HeaderAdmin />

            <section className="flex overflow-hidden [&>*]:font-sans">
                <SidebarAdmin />
                <Box className="w-[15.1rem] xl:w-[22.73rem] hidden lg:block lg:pl-24 xl:pl-10"></Box>
                <main className="w-full pt-14">
                    <Outlet />
                </main>
                {children}
            </section>
        </main>
    );
};

export default Dashboard;
