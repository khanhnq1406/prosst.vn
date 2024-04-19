import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Detail, { loader as detailLoader } from "./routes/detail";

const router = createHashRouter([
  { path: "/", element: <Root /> },
  { path: "/san-pham/:productId", element: <Detail />, loader: detailLoader },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
