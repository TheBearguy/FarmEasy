import React from "react";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "@components/common/sonner";
import { ScrollToTop } from "@components/common/scroll-to-top";

// import router from "./routes";

import { lazy } from "react";

import {
    Route,
    createBrowserRouter,
    createRoutesFromChildren,
} from "react-router-dom";

import {
    MainLayout,
    DashboardAdminLayout,
    DashboardFarmerLayout,
} from "@/layouts";
import { Loading } from "@components/common/suspense-loader";

const Home = lazy(() => import("@/pages/home"));

const Dashboard_Admin = lazy(() => import("@/pages/dashboard_admin/main"));
const ConvertToPDF = lazy(
    () => import("@/pages/dashboard_admin/convert-to-pdf"),
);

const Dashboard_Farmer = lazy(() => import("@/pages/dashboard_farmer/main"));
const Chat = lazy(() => import("@/pages/dashboard_farmer/chat"));

const NotFound = lazy(() => import("@/pages/not-found"));

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            {/* All your routes below */}

            <Route path="/" element={<MainLayout />}>
                <Route
                    index
                    element={
                        <Loading>
                            <Home />
                        </Loading>
                    }
                />
            </Route>

            <Route path="/dashboard/admin" element={<DashboardAdminLayout />}>
                <Route
                    index
                    element={
                        <Loading>
                            <Dashboard_Admin />
                        </Loading>
                    }
                />

                <Route
                    path="convert-to-pdf"
                    element={
                        <Loading>
                            <ConvertToPDF />
                        </Loading>
                    }
                />
            </Route>

            <Route path="/dashboard/farmer" element={<DashboardFarmerLayout />}>
                <Route
                    index
                    element={
                        <Loading>
                            <Dashboard_Farmer />
                        </Loading>
                    }
                />

                <Route
                    path="chat`"
                    element={
                        <Loading>
                            <Chat />
                        </Loading>
                    }
                />
            </Route>

            <Route
                path="*"
                element={
                    <Loading>
                        <NotFound />
                    </Loading>
                }
            />
        </Route>,
    ),
);

export default function App() {
    return (
        <React.Fragment>
            <ScrollToTop />
            <RouterProvider router={router} />
            <Toaster />
        </React.Fragment>
    );
}
