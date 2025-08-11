import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import RegisterLayout from "../layouts/RegisterLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
    },
    {
        path: "/register",
        element: <RegisterLayout />
    }
])