import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SelectCourse from "../pages/SelectCourse";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/select-course",
        element: <SelectCourse />
    },
])