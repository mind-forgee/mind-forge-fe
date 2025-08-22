import { createBrowserRouter } from "react-router-dom";
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
import StudyCase from "../pages/users/StudyCase";
import AdminLayout from "../layouts/AdminLayout";
import Overview from "../pages/admin/Overview";
import Blog from "../pages/admin/Blog";
import ManageCourses from "../pages/admin/ManageCourses";
import Topics from "../pages/admin/Topics";
import ProtectedRoutes from "../layouts/ProtectedRoutes";
import ChapterLayout from "../layouts/ChapterLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminProfile from "../pages/admin/AdminProfile";
import UserSubmisson from "../pages/admin/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingLayout /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "select-course", element: <SelectCourse /> },
      { path: "error", element: <ErrorDialog /> },
      { path: "success", element: <SuccessDialog /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    element: <ProtectedRoutes allowedRoles={["user"]} />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
              {
                path: "course",
                element: <Dashboard />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
            ],
          },
          {
            path: "chapter",
            element: <ChapterLayout />,
            children: [
              {
                path: ":chapterId",
                element: <ChapterDetail />,
              },
              {
                path: "study-case",
                element: <StudyCase />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoutes allowedRoles={["admin"]} />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "courses",
            element: <ManageCourses />,
          },
          {
            path: "topics",
            element: <Topics />,
          },
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "submission-case",
            element: <UserSubmisson />,
          },
        ],
      },
    ],
  },
]);
