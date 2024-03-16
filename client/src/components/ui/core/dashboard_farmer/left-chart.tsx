import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { Wrapper } from "@components/common/containers";

import { LEFT_CHART } from "@/data/dashboard-left-chart";

const LeftChart: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Wrapper>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={LEFT_CHART}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Bar dataKey="total" fill="#A84885" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            {children}
        </Wrapper>
    );
};
export default LeftChart;
