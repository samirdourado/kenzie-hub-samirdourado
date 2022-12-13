import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashBoardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { NotFoundPage } from "../pages/notFoundPage";
import { RegisterPage } from "../pages/registerPage";

export function RoutesCentral() {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage />}/>
            <Route path="dashboard" element={<DashBoardPage/>}/>

            {/* <Route path="*" element={<Navigate to="/"/>}/> */}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}