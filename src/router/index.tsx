import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// layouts
import { RouteLayout } from "@/components/layouts/RouteLayout";

// pages: apps
const Home = lazy(() => import("@/pages/Home"));
const BookCategoryMain = lazy(() => import("@/pages/Category/Book"));

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: <RouteLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "category",
          children: [
            {
              path: "books",
              element: <Navigate to="/local-books" replace />,
            },
            {
              path: "local-books",
              element: <BookCategoryMain />,
            },
          ],
        },
      ],
    },
  ]);

export default Router;
