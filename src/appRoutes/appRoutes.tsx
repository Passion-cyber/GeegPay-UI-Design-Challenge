import { useRoutes } from "react-router-dom";
import  DashboardLayout  from "../pages/DashboardLayout/DashboardLayout";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <DashboardLayout /> },
  ]);
  return routes;
};

export default AppRoutes;
