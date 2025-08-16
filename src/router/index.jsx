import { createBrowserRouter, Navigate } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import SelectCourse from "../pages/precourse/SelectCourse";
import NotFound from "../pages/dialogs/NotFound";
import ErrorDialog from "../pages/dialogs/ErrorDialog";
import SuccessDialog from "../pages/dialogs/SuccessDialog";
import RootLayout from "../layouts/RootLayout";
import UserLayout from "../layouts/UserLayout";
import Dashboard from "../pages/users/Dashboard";
import Profile from "../pages/users/Profile";
import ChapterDetail from "../pages/users/ChapterDetail";
import StudyCase from "../pages/StudyCase"; // adjust the path if needed



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingLayout /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "select-course", element: <SelectCourse /> },
      { path: "study-case", element: <StudyCase /> },
      { path: "error", element: <ErrorDialog /> },
      { path: "success", element: <SuccessDialog /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "chapter/:chapterId",
        element: <ChapterDetail />
      },
    ]
  },
]);
