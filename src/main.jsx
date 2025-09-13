import './App.css'
import router from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import * as React from "react";
import * as ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);