import { Route, Routes } from "react-router-dom";
import { DashBoard, NotFound, DataTables } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DataTables />} />
      <Route path="/campaigns" element={<DataTables />} />
      <Route path="/dashboard/:id" element={<DashBoard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
