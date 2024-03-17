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
    DropdownMenuTrigger,
} from "@components/common/dropdown-menu";

import { MobileSidebar } from "./sidebar";

import logo from "@/assets/logo.jpg";
import { toast } from "sonner";

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Box className="fixed top-0 left-0 right-0 z-20 text-black bg-rt-normal-slate-100/5 dark:bg-rt-normal-sand-1200 border-b-2 border-b-custom-border">
            <nav className="h-14 bg-custom-color flex items-center justify-between space-x-2 pr-2">
                {/* Logo goes here */}
                <Box className="hidden lg:block">
                    <Link className="flex items-center gap-2 pl-4" to="#">
                        <img src={logo} alt="Logo" className="w-16 h-16" />
                    </Link>
                </Box>

                <Box className={cn("block lg:hidden")}>
                    <MobileSidebar />
                </Box>

                <Box className={cn("lg:hidden flex flex-row space-x-1")}>
                    <Typography variant="h6" className="font-semibold">
                        Company Name
                    </Typography>
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
        file: "",
    });

    const handleLogOut = () => {
        //! add the logic here for logging out the user
        localStorage.clear();
        toast.success("Logged out successfully", {
            position: "bottom-right",
        });

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    useEffect(() => {
        //! add the logic here for fetching the user details
        const data = localStorage.getItem("User");

        if (data) {
            const user = JSON.parse(data);
            setUser(user);
        }
    }, []);

    if (!user) return null;

    return (
        <Box className="flex flex-row justify-between items-center space-x-2">
            <Section>
                {/* Additional Components for Navbar goes here */}
            </Section>

            <DropdownMenu>
                <DropdownMenuTrigger asChild className="px-0 outline-none ">
                    <Button className="rounded-full overflow-hidden aspect-square bg-rt-normal-slate-400 active:bg-rt-normal-slate-400 focus:bg-rt-normal-slate-400 hover:bg-rt-normal-slate-400 dark:bg-rt-normal-slate-1200 dark:active:bg-rt-normal-slate-1200 dark:focus:bg-rt-normal-slate-1200 dark:hover:bg-rt-normal-slate-1200 px-0">
                        <img
                            src={`http://localhost:5001/${user.file?.split("\\")[1]}`}
                            alt="Profile Image"
                            className="rounded-full aspect-square object-cover w-10 h-10"
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
                            className="text-rt-alpha-amber-1200 text-xs leading-none"
                        >
                            {user.email}
                        </Typography>
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={handleLogOut}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Box>
    );
};

export default Header;
