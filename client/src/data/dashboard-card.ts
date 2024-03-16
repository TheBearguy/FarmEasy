import type { IconType } from "@/icons";
import { FaDollarSign, FiUsers, FaRegEnvelope, BsGraphUpArrow } from "@/icons";

interface DashboardCard {
    header: string;
    content: string;
    icon?: IconType;
    footer: string;
}

export const DASHBOARD_CARDS_ADMIN: DashboardCard[] = [
    {
        header: "Total Revenue",
        content: "$45,231.89",
        icon: FaDollarSign,
        footer: "+20.1% from last month",
    },
    {
        header: "Subscription",
        content: "+2350",
        icon: FiUsers,
        footer: "+20.1% from last month",
    },
    {
        header: "Sales",
        content: "$45,234",
        icon: FaRegEnvelope,
        footer: "+20.1% from last month",
    },
    {
        header: "Active Now",
        content: "+230",
        icon: BsGraphUpArrow,
        footer: "+20.1% from last hour",
    },
];

export const DASHBOARD_CARDS_FARMER: DashboardCard[] = [
    {
        header: "Total Revenue",
        content: "$45,231.89",
        icon: FaDollarSign,
        footer: "+20.1% from last month",
    },
    {
        header: "Subscription",
        content: "+2350",
        icon: FiUsers,
        footer: "+20.1% from last month",
    },
    {
        header: "Sales",
        content: "$45,234",
        icon: FaRegEnvelope,
        footer: "+20.1% from last month",
    },
    {
        header: "Active Now",
        content: "+230",
        icon: BsGraphUpArrow,
        footer: "+20.1% from last hour",
    },
];
