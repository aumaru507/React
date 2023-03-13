import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Entities from "./routes/Entities";
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import "./App.css";
import DataAnalytics from "./routes/DataAnalytics";
import Create from "./components/Create";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {   path: "data-analytics",
          element: <DataAnalytics/>,
      },

      {
        path: "Entities",
        element: <Entities/>,
      },

      {
        path: "products",
        element: <Products/>,
      },
    
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "create",
        element: <Create />,
      },
    ]
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);