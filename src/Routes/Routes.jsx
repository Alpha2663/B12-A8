import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Apps from "../Components/Apps";
import MyInstallation from "../Components/MyInstallation";
import ErrorPath from "../Pages/ErrorPath";
import AppDetails from "../Pages/AppDetails";
import NotFound from "../Pages/NotFound";
export const router = createBrowserRouter([
  
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPath></ErrorPath>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
      {
        path: "/my-installation",
        Component: MyInstallation,
      },
  
    ],
  },
]);
