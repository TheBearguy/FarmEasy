import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { toast } from "sonner";

const PrivateRoute: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => {
    const location = useLocation();
    const userString = localStorage.getItem("User");

    console.log("User", userString);

    if (!userString) {
        toast.error("Please login to access this page", {
            position: "bottom-right",
        });

        console.log("User not found");
        setTimeout(() => {}, 2000);
        return <Navigate to="/login" />;
    }

    const user = userString ? JSON.parse(userString) : null;
    console.log("User", user);
    if (user.role === "User" && !location.pathname.includes("user-store")) {
        return <Navigate to="/user-store" />;
    } else if (
        user.role === "User" &&
        location.pathname.includes("user-store")
    ) {
        return children;
    } else if (
        user.role === "Farmer" &&
        !location.pathname.includes("dashboard/farmer")
    ) {
        return <Navigate to="/dashboard/farmer" />;
    } else if (
        user.role === "Farmer" &&
        location.pathname.includes("dashboard/farmer")
    ) {
        return children;
    } else if (user.role === "Admin" && !location.pathname.includes("admin")) {
        return <Navigate to="/dashboard/admin" />;
    } else if (user.role === "Admin" && location.pathname.includes("admin")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }

    // const token = localStorage.getItem("token");

    // if (token) {
    //     return children;
    // } else {
    //     return <Navigate to="/login" />;
    // }
};

export default PrivateRoute;
