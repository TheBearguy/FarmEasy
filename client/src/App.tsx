import React, { lazy } from "react";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "@components/common/sonner";
import { Loading } from "@components/common/suspense-loader";
import { ScrollToTop } from "@components/common/scroll-to-top";

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

import { PrivateRoute } from "@/routes";

const Home = lazy(() => import("@/pages/home"));
const Login = lazy(() => import("@/pages/login"));
const Signup = lazy(() => import("@/pages/signup"));

const Dashboard_Admin = lazy(() => import("@/pages/dashboard_admin/main"));
const ConvertToPDF = lazy(
    () => import("@/pages/dashboard_admin/convert-to-pdf"),
);

const Dashboard_Farmer = lazy(() => import("@/pages/dashboard_farmer/main"));
const Chat = lazy(() => import("@/pages/dashboard_farmer/chat"));
const Buy = lazy(() => import("@/pages/dashboard_farmer/buy"));
const Sell = lazy(() => import("@/pages/dashboard_farmer/sell"));

const User = lazy(() => import("@/pages/user"))
const Cart = lazy(() => import("@/pages/user-cart"));

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

                <Route
                    path="login"
                    element={
                        <Loading>
                            <Login />
                        </Loading>
                    }
                />

                <Route
                    path="signup"
                    element={
                        <Loading>
                            <Signup />
                        </Loading>
                    }
                />
            </Route>

            <Route path="/dashboard/admin" element={<DashboardAdminLayout />}>
                <Route
                    index
                    element={
                        <Loading>
                            <PrivateRoute>
                                <Dashboard_Admin />
                            </PrivateRoute>
                        </Loading>
                    }
                />

                <Route
                    path="convert-to-pdf"
                    element={
                        <Loading>
                            <PrivateRoute>
                                <ConvertToPDF />
                            </PrivateRoute>
                        </Loading>
                    }
                />
            </Route>

            <Route path="/dashboard/farmer" element={<DashboardFarmerLayout />}>
                <Route
                    index
                    element={
                        <Loading>
                            <PrivateRoute>
                                <Dashboard_Farmer />
                            </PrivateRoute>
                        </Loading>
                    }
                />

                <Route
                    path="chat"
                    element={
                        <Loading>
                            <PrivateRoute>
                                <Chat />
                            </PrivateRoute>
                        </Loading>
                    }
                />

                <Route
                    path="buy"
                    element={
                        <Loading>
                            <PrivateRoute>
                                <Buy />
                            </PrivateRoute>
                        </Loading>
                    }
                />

                <Route
                    path="sell"
                    element={
                        <Loading>
                            <PrivateRoute>
                                <Sell />
                            </PrivateRoute>
                        </Loading>
                    }
                />
            </Route>

            <Route
                path="user-store"
                element={
                    <Loading>
                        <PrivateRoute>
                            <User />
                        </PrivateRoute>
                    </Loading>
                }
            />
            <Route
                path="user-cart"
                element={
                    <Loading>
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    </Loading>
                }
            />

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
