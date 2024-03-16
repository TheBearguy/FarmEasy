import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { Wrapper } from "@components/common/containers";
import { ILeftChart } from "@/types";

const LeftChart: React.FC<{
    children?: React.ReactNode;
    data: ILeftChart[];
}> = ({ children, data }) => {
    return (
        <Wrapper>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
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
