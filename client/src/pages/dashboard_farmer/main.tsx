import React from "react";

import { Box, Main } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@components/common/card";

import {
    Tabs,
    TabsTrigger,
    TabsContent,
    TabsList,
} from "@components/common/tabs";

import { LeftChart, RightComp } from "@/components/ui/core/dashboard_farmer";

// import { DASHBOARD_CARDS_FARMER } from "@/data/dashboard-card";

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Box className="space-y-4">
                <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                    Hi, Welcome Back 👋
                </Typography>

                <Tabs defaultValue="account" className="w-[200px]">
                    <TabsList className="grid w-full grid-cols-1">
                        <TabsTrigger value="account">Account</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account"></TabsContent>
                </Tabs>

                {/* <Box className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-4">
                    {DASHBOARD_CARDS_FARMER.map((card, index) => (
                        <Card className="" key={index}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {card.header}
                                </CardTitle>
                                {card.icon && <card.icon />}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {card.content}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {card.footer}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </Box> */}
                <Box className="grid grid-rows-2 lg:grid-cols-7 gap-4">
                    <Card className="col-span-4">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-bold">
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LeftChart />
                        </CardContent>
                    </Card>
                    <Card className="col-span-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-bold">
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RightComp />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            {children}
        </Main>
    );
};

export default Dashboard;
