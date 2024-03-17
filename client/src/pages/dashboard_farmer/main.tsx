import React, { useEffect, useState } from "react";
import { Box, Main } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import { Card, CardContent } from "@components/common/card";

import { Input } from "@components/common/input";
import { Label } from "@components/common/label";
import { RightComp } from "@/components/ui/core/dashboard_farmer";

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [author, setAuthor] = useState({
        name: "",
        email: "",
        phone: "",
        file: "",
    });

    useEffect(() => {
        const userString = localStorage.getItem("User");
        console.log("userString ", userString);

        if (!userString) {
            window.location.href = "/login";
            return;
        }

        try {
            const user = JSON.parse(userString);
            setAuthor(user);
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
        }
    }, []);

    console.log("Author", author);

    if (!author) {
        // If author is not set yet, render loading state or return null
        return null;
    }

    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Box className="space-y-4">
                <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                    Welcome {author.name}👋
                </Typography>

                <Box className="grid max-md:grid-rows-2 lg:grid-cols-2 gap-6">
                    <Card className="">
                        <CardContent className="max-h-60 w-full">
                            <img
                                src={`http://localhost:5001/${author.file?.split("\\")[1]}`}
                                alt={author.name}
                                className="object-cover max-h-60"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Box className="space-y-4">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    value={author.name}
                                    disabled
                                />
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    value={author.email}
                                    disabled
                                />
                                <Label htmlFor="phone">Role</Label>
                                <Input
                                    type="text"
                                    id="phone"
                                    value={
                                        author.phone ||
                                        Math.floor(
                                            1000000000 +
                                                Math.random() * 9000000000,
                                        )
                                            .toString()
                                            .slice(0, 10)
                                    }
                                    disabled
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box className="my-5 p-2 rounded-xl ring-2 ring-slate-100">
                    <RightComp />
                </Box>
                <p>&nbsp;</p>
            </Box>
            {children}
        </Main>
    );
};

export default Dashboard;
