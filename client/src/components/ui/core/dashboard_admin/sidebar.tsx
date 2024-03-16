import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Button } from "@components/common/button";
import { Box } from "@components/common/containers";

import { Sheet, SheetContent, SheetTrigger } from "@components/common/sheet";

import { IoMdMenu } from "@/icons";
import { Typography } from "@components/common/typography";

import { SIDEBAR_LINKS_ADMIN } from "@/data/dashboard-links";
import { cn } from "@/lib/utils";

const Sidebar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    return (
        <nav
            className={cn(
                `fixed hidden h-full border-r-2 border-r-custom-border pt-14 box-border bg-custom-color lg:block w-52 xl:w-72`,
            )}
        >
            <Box className="space-y-4 py-4">
                <Box className="px-2 xl:px-3 py-2">
                    <Box className="space-y-2 xl:space-y-1 pl-3 [&>*]:text-2xl">
                        <Typography variant="h2" className="border-b-0 pl-3">
                            Menu
                        </Typography>
                        {SIDEBAR_LINKS_ADMIN.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.link || "/dashboard"}
                                className={cn(
                                    "flex items-center py-1 space-x-3 xl:space-x-5 bg-custom-color hover:bg-custom-hover pl-1 rounded-md",
                                    {
                                        "bg-custom-hover":
                                            location.pathname === item.link,
                                    },
                                )}
                            >
                                <item.icon
                                    className={`text-2xl font-extralight text-${item.iconColor || "black"}`}
                                />
                                <Typography
                                    variant="h4"
                                    className="font-normal text-lg"
                                >
                                    {item.title}
                                </Typography>
                            </NavLink>
                        ))}
                    </Box>
                </Box>
            </Box>
            {children}
        </nav>
    );
};

const MobileSidebar: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Sheet>
            <SheetTrigger
                asChild
                className="rounded-md bg-rt-normal-slate-100/5 dark:bg-rt-normal-sand-1200"
            >
                <Button className="px-2.5">
                    <IoMdMenu className="text-2xl" />
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className={cn("!px-0 bg-custom-color border-custom-border")}
            >
                <Box className="flex flex-col pl-5 pt-5 space-y-2">
                    <Typography variant="h2" className="mb-5 border-b-0">
                        Menu
                    </Typography>

                    {/* All the rest links will be here */}
                    {SIDEBAR_LINKS_ADMIN.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link || "/dashboard"}
                            className={cn(
                                "flex items-center py-1 space-x-3 xl:space-x-5 bg-custom-color hover:bg-custom-hover pl-1 rounded-md",
                                {
                                    "bg-custom-hover":
                                        location.pathname === item.link,
                                },
                            )}
                        >
                            <item.icon
                                className={`text-2xl font-extralight ${item.iconColor}`}
                            />
                            <Typography variant="h4" className="font-normal">
                                {item.title}
                            </Typography>
                        </NavLink>
                    ))}
                    {children}
                </Box>
            </SheetContent>
        </Sheet>
    );
};

export { MobileSidebar };
export default Sidebar;
