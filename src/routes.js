import { useRoutes, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import MainLayout from "Layouts/MainLayout/MainLayout";
import Main from "pages/Main/Main";
import MainIndex from "pages/MainIndex/MainIndex";
import MainSingle from "pages/MainSingle/MainSingle";
import SettingsLayout from "Layouts/SettingsLayout/SettingsLayout";
import Protected from "helpers/Protected/Protected";
import Login from "pages/Login/Login";

const hasToken = localStorage.getItem("token");

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <Protected isProtected={!hasToken}>
          <Navigate to="/main" replace />
        </Protected>
      ),
    },
    {
      path: "/main",
      element: (
        <Protected isProtected={!hasToken}>
          <MainLayout />
        </Protected>
      ),
      children: [
        {
          index: true,
          element: (
            <Protected isProtected={!hasToken}>
              <MainIndex />
            </Protected>
          ),
        },
        {
          path: ":tab_name",
          element: (
            <Protected isProtected={!hasToken}>
              <Main />
            </Protected>
          ),
          children: [
            {
              path: ":id",
              element: (
                <Protected isProtected={!hasToken}>
                  <MainSingle />
                </Protected>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/settings",
      element: (
        <Protected isProtected={!hasToken}>
          <SettingsLayout />
        </Protected>
      ),
      children: [
        {
          index: true,
          element: (
            <Protected isProtected={!hasToken}>
              <MainIndex />
            </Protected>
          ),
        },
        {
          path: ":tab_name",
          element: (
            <Protected isProtected={!hasToken}>
              <Main />
            </Protected>
          ),
          children: [
            {
              path: ":id",
              element: (
                <Protected isProtected={!hasToken}>
                  <MainSingle />
                </Protected>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: hasToken ? <Navigate to="/main" replace /> : <Login />,
    },
    // {
    //   path: "/blog",
    //   element: <Blog />,
    // },
    // {
    //   path: "/products",
    //   element: <ProductsLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Products />,
    //     },
    //     {
    //       path: ":id",
    //       element: <ProductsById />,
    //     },
    //   ],
    // },
    {
      path: "*",
      element: (
        <Protected isProtected={!hasToken}>
          <NotFound />
        </Protected>
      ),
    },
  ]);
