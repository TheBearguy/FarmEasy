import React from "react";
import { Navigate } from "react-router-dom";

const OpenRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem("token");

    if (token === null) {
        return children;
    } else {
        return <Navigate to="/dashboard" />;
    }
};

export default OpenRoute;
