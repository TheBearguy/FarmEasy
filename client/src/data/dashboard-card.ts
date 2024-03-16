import type { IconType } from "@/icons";
import { FaDollarSign, FiUsers, FaRegEnvelope, BsGraphUpArrow } from "@/icons";

interface DashboardCard {
    header: string;
    content: string;
    icon?: IconType;
}

export const DASHBOARD_CARDS_ADMIN: DashboardCard[] = [
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
];

export const DASHBOARD_CARDS_FARMER: DashboardCard[] = [
    {
        header: "Total Revenue",
        content: "$45,231.89",
        icon: FaDollarSign,
    },
    {
        header: "Subscription",
        content: "+2350",
        icon: FiUsers,
    },
    {
        header: "Sales",
        content: "$45,234",
        icon: FaRegEnvelope,
    },
    {
        header: "Active Now",
        content: "+230",
        icon: BsGraphUpArrow,
    },
];
