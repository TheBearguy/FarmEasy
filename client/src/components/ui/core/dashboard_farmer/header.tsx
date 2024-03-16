import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import { Button } from "@components/common/button";
import { Typography } from "@components/common/typography";
import { Box, Section } from "@components/common/containers";
// import { ModeToggle } from '@/components/theme/mode-toggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@components/common/dropdown-menu";

import { MobileSidebar } from "./sidebar";

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box className="fixed top-0 left-0 right-0 z-20 text-black bg-rt-normal-slate-100/5 dark:bg-rt-normal-sand-1200 border-b-2 border-b-custom-border">
            <nav className="h-14 bg-custom-color flex items-center justify-between space-x-2 pr-2">
                {/* Logo goes here */}
                <Box className="hidden lg:block">
                    <Link
                        className="flex items-center gap-2 pl-4"
                        to="https://github.com/Kiranism/next-shadcn-dashboard-starter"
                        target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6">
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                    </Link>
                </Box>

                <Box className={cn("block lg:hidden")}>
                    <MobileSidebar />
                </Box>

                <Box className={cn("lg:hidden flex flex-row space-x-1")}>
                    <Typography variant="h6" className="font-semibold">
                        Company Name
                    </Typography>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6">
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                </Box>

                <Box className={cn("flex items-center gap-2")}>
                    <Navbar />
                    {/* <ModeToggle /> */}
                </Box>
            </nav>
            {children}
        </Box>
    );
};

const Navbar: React.FC = () => {
    const [user, setUser] = useState({
        name: "Kiran Goel",
        email: "demo@gmail.com",
        profileImg: "",
    });

    const handleLogOut = () => {
        //! add the logic here for logging out the user
    };

    useEffect(() => {
        //! add the logic here for fetching the user details
        setUser((prevState) => {
            return {
                ...prevState,
                profileImg: "https://avatars.githubusercontent.com/u/111",
            };
        });
    }, []);

    return (
        <Box className="flex flex-row justify-between items-center space-x-2">
            <Section>
                {/* Additional Components for Navbar goes here */}
            </Section>

            <DropdownMenu>
                <DropdownMenuTrigger asChild className="px-0 outline-none ">
                    <Button className="rounded-full overflow-hidden aspect-square bg-rt-normal-slate-400 active:bg-rt-normal-slate-400 focus:bg-rt-normal-slate-400 hover:bg-rt-normal-slate-400 dark:bg-rt-normal-slate-1200 dark:active:bg-rt-normal-slate-1200 dark:focus:bg-rt-normal-slate-1200 dark:hover:bg-rt-normal-slate-1200 px-0">
                        <img
                            src={user.profileImg}
                            alt="Profile Image"
                            className="rounded-full aspect-square"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-2 min-w-40 bg-custom-color border-custom-border mt-2">
                    <DropdownMenuLabel>
                        <Typography variant="h6" className="font-bold">
                            {user.name}
                        </Typography>
                        <Typography
                            variant="p"
                            affects="removePMargin"
                            className="text-rt-alpha-amber-1200 text-xs leading-none">
                            {user.email}
                        </Typography>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator className="border-custom-border bg-custom-border" />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>

                    <DropdownMenuSeparator className="border-custom-border bg-custom-border" />
                    <DropdownMenuItem onClick={handleLogOut}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Box>
    );
};

export default Header;
