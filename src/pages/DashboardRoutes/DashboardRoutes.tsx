import { Routes, Route } from "react-router-dom";
import { DashHome } from "../index";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<DashHome />} />
    </Routes>
  );
};

export default DashboardRoutes;
