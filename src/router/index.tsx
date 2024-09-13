import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// layouts
import { RouteLayout } from "@/components/layouts/RouteLayout";

// pages: apps
const Home = lazy(() => import("@/pages/Home"));
const BookCategory = lazy(() => import("@/pages/Category/Book"));
const ForeignCategory = lazy(() => import("@/pages/Category/Foreign"));

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
              element: <BookCategory />,
            },
            {
              path: "foreign-books",
              element: <ForeignCategory />,
            },
          ],
        },
      ],
    },
  ]);

export default Router;
