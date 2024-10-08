import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// layouts
import { RouteLayout } from "@/components/layouts/RouteLayout";

// pages: apps
const Home = lazy(() => import("@/pages/Home"));
const BookCategory = lazy(() => import("@/pages/Category/Book"));
const ForeignCategory = lazy(() => import("@/pages/Category/Foreign"));
const EbookCategory = lazy(() => import("@/pages/Category/Ebook"));
const GoodsCategory = lazy(() => import("@/pages/Category/Goods"));
const UsedCategory = lazy(() => import("@/pages/Category/Used"));
const CdCategory = lazy(() => import("@/pages/Category/Cd"));
const BluelayCategory = lazy(() => import("@/pages/Category/Bluelay"));
const LibraryCategory = lazy(() => import("@/pages/Category/Library"));

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
              element: <Navigate to="/category/local-books" replace />,
            },
            {
              path: "local-books",
              element: <BookCategory />,
            },
            {
              path: "foreign-books",
              element: <ForeignCategory />,
            },
            {
              path: "ebooks",
              element: <EbookCategory />,
            },
            {
              path: "goods",
              element: <GoodsCategory />,
            },
            {
              path: "used-shop",
              element: <UsedCategory />,
            },
            {
              path: "cd-bluelay",
              element: <Navigate to="/category/cd" replace />,
            },
            {
              path: "cd",
              element: <CdCategory />,
            },
            {
              path: "bluelay",
              element: <BluelayCategory />,
            },
            {
              path: "library",
              element: <LibraryCategory />,
            },
          ],
        },
      ],
    },
  ]);

export default Router;
