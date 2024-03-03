import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/add",
    element: <AddMovie />,
  },

  {
    path: "/edit/:movie_id",
    element: <EditMovie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
