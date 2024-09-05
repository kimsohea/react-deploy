import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// layouts
import { RouteLayout } from "@/components/layouts/RouteLayout";

// pages: apps
const Home = lazy(() => import("@/pages/Home"));
const BookCategory = lazy(() => import("@/pages/Categories"));
const ProductInfo = lazy(() => import("@/pages/ProductInfo"));

// pages: libraries
const NotFound = lazy(() => import("@/pages/NotFound"));

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
          path: "books",
          children: [
            {
              index: true,
              path: "local-books", // `/books/local-books`에 접속할 때 BookCategory 렌더링
              element: <BookCategory />,
            },
            // {
            //   path: 'foreign-books',  // 추가적인 하위 경로
            //   element: <LocalBooks />,
            // }
          ],
        },
        {
          path: "products",
          element: <ProductInfo />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

export default Router;
