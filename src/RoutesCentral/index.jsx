import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashBoardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { NotFoundPage } from "../pages/notFoundPage";
import { RegisterPage } from "../pages/registerPage";
import { ProtectedRout } from "./ProtectedRout.jsx";

export function RoutesCentral() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<ProtectedRout/>}>        
        <Route path="dashboard" element={<DashBoardPage />} />        
    </Route>      
    </Routes>
  );
}
