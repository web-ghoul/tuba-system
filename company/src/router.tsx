import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import Error from "./pages/Error.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";
import Employees from "./pages/Employees.tsx";
import Employee from "./pages/Employee.tsx";
import Network from "./pages/Network.tsx";
import Networks from "./pages/Networks.tsx";
import Approvals from "./pages/Approvals.tsx";
import Approval from "./pages/Approval.tsx";
import Package from "./pages/Package.tsx";
import Packages from "./pages/Packages.tsx";
import Tuba from "./Tuba.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Tuba />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: `${process.env.REACT_APP_LOGIN_ROUTE}`,
        element: <Login />,
      },
      {
        path: `${process.env.REACT_APP_PROFILE_ROUTE}`,
        element: <Profile />,
      },
      {
        path: `${process.env.REACT_APP_EMPLOYEES_ROUTE}`,
        element: <Employees />,
      },
      {
        path: `${process.env.REACT_APP_EMPLOYEES_ROUTE}/:id`,
        element: <Employee />,
      },
      {
        path: `${process.env.REACT_APP_PACKAGES_ROUTE}`,
        element: <Packages />,
      },
      {
        path: `${process.env.REACT_APP_PACKAGES_ROUTE}/:id`,
        element: <Package />,
      },
      {
        path: `${process.env.REACT_APP_APPROVALS_ROUTE}`,
        element: <Approvals />,
      },
      {
        path: `${process.env.REACT_APP_APPROVALS_ROUTE}/:id`,
        element: <Approval />,
      },
      {
        path: `${process.env.REACT_APP_NETWORKS_ROUTE}`,
        element: <Networks />,
      },
      {
        path: `${process.env.REACT_APP_NETWORKS_ROUTE}/:id`,
        element: <Network />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
