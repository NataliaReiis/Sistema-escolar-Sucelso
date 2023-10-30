import * as React from "react";
import "./sass/main.scss"
import App from "./App.jsx"
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import router from "./routes/router"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
