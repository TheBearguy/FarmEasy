import { NavItem } from "@/types";

import { RxDashboard, FaFilePdf, CiChat1 } from "@/icons";

export const SIDEBAR_LINKS_ADMIN: NavItem[] = [
    {
        title: "Dashboard",
        icon: RxDashboard,
        iconColor: "rt-normal-amber-800",
        link: "/dashboard/admin",
    },
    {
        title: "Convert to PDF",
        icon: FaFilePdf,
        iconColor: "rt-normal-red-1000",
        link: "/dashboard/admin/convert-to-pdf",
    },
];

export const SIDEBAR_LINKS_FARMER: NavItem[] = [
    {
        title: "Dashboard",
        icon: RxDashboard,
        iconColor: "rt-normal-amber-800",
        link: "/dashboard/farmer",
    },
    {
        title: "Chat",
        icon: CiChat1,
        iconColor: "rt-normal-amber-800",
        link: "/dashboard/farmer/chat",
    },
];

("text-rt-normal-amber-800");
("text-rt-normal-blue-600");
("text-rt-normal-red-1000");
("text-rt-normal-slate-100/5");
("text-rt-normal-sand-1200");
