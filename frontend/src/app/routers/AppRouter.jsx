import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../features/dashboard/ui/Home";
import PublicRoute from "../protectedRoutes/PublicRoute";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Regsiter from "../../features/auth/ui/pages/Regsiter";
import DashboardLayout from "../layout/DashboardLayout";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Regsiter />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
