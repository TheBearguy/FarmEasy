import React, { useState, useEffect } from "react";

import { Box } from "@components/common/containers";
import { Avatar, AvatarFallback, AvatarImage } from "@components/common/avatar";

import { getUser } from "@/api/adminAPI";
import { toast } from "sonner";

const RightComp: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState([
        {
            name: "Olivia Martin",
            email: "olivia@gmail.com",
            role: "User",
            img: "https://avatars.githubusercontent.com/u/111",
        },
    ]);

    useEffect(() => {
        try {
            getUser().then((response) => {
                setData(response);
            });
        } catch (error) {
            toast.error("Error fetching the user data", {
                position: "bottom-right",
            });
        }
    }, []);

    return (
        <Box className="space-y-8 w-full h-80 overflow-y-auto px-2">
            {data?.map((user, index) => (
                <Box className="flex items-center" key={index}>
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={user.img} alt="Avatar" />
                        <AvatarFallback className="border border-black">
                            {user.name.split(" ")[0].slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <Box className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {user.email}
                        </p>
                    </Box>
                    <Box className="ml-auto font-medium border-2 rounded-xl border-black py-2 px-5 bg-gray-300">{user.role}</Box>
                </Box>
            ))}
            {children}
        </Box>
    );
};

export default RightComp;
