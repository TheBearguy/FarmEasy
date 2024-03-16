import React, { useEffect, useState } from "react";

import { Box, Main } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@components/common/card";

import { Tabs, TabsTrigger, TabsList } from "@components/common/tabs";

import { LeftChart, RightComp } from "@/components/ui/core/dashboard_admin";

// import { DASHBOARD_CARDS_ADMIN } from "@/data/dashboard-card";

import { getCard } from "@/api/adminAPI";
import { toast } from "sonner";
import { FaDollarSign, FiUsers, FaRegEnvelope, BsGraphUpArrow } from "@/icons";

import { LEFT_CHART } from "@/data/dashboard-left-chart";
import { ILeftChart } from "@/types";

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [graphData, setGraphData] = useState<ILeftChart[]>(LEFT_CHART);
    const [cardData, setCardData] = useState([
        {
            header: "Total Farmers",
            content: "45",
            icon: FaDollarSign,
        },
        {
            header: "Total Users",
            content: "2350",
            icon: FiUsers,
        },
        {
            header: "Total Revenue of Farmer",
            content: "$45,234",
            icon: FaRegEnvelope,
        },
        {
            header: "Total Number of Product Sold",
            content: "230",
            icon: BsGraphUpArrow,
        },
    ]);

    const handleSales = () => {
        setGraphData(LEFT_CHART);
        console.log("Sales");
    };

    useEffect(() => {
        try {
            getCard().then((response) => {
                if (!response)
                    return toast.error("Error fetching data", {
                        position: "bottom-right",
                    });
                setCardData([
                    {
                        header: "Total Farmers",
                        content: response.total_farmer.totalNoOfFarmers,
                        icon: FaDollarSign,
                    },
                    {
                        header: "Total Users",
                        content: response.total_users.totalNoOfUsers,
                        icon: FiUsers,
                    },
                    {
                        header: "Total Revenue of Farmer",
                        content: "$45,234",
                        icon: FaRegEnvelope,
                    },
                    {
                        header: "Total Number of Product Sold",
                        content: "230",
                        icon: BsGraphUpArrow,
                    },
                ]);
            });
        } catch (error) {
            toast.error("Error fetching data", {
                position: "bottom-right",
            });
        }
    }, []);

    const handlePurchase = () => {
        setGraphData(LEFT_CHART);
        console.log("Purchase");
    };

    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Box className="space-y-4">
                <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                    Hey Admin! 👋
                </Typography>

                <Box className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-4">
                    {cardData.map((card, index) => (
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
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Box>
                    <Tabs defaultValue="total_sales" className="w-[300px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger
                                value="total_sales"
                                onClick={handleSales}
                            >
                                Total Sales
                            </TabsTrigger>
                            <TabsTrigger
                                value="total_purchased"
                                onClick={handlePurchase}
                            >
                                Total Purchase
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <Box className="grid grid-rows-2 lg:grid-cols-7 gap-4 pt-2">
                        <Card className="col-span-4">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-bold">
                                    Overview
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <LeftChart data={graphData} />
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
            </Box>
            {children}
        </Main>
    );
};

export default Dashboard;
