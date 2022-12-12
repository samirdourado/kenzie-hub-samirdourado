import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashBoardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { NotFoundPage } from "../pages/notFoundPage";
import { RegisterPage } from "../pages/registerPage";


export function RoutesCentral({user, setUser, registerNewUser, loginUser, logoutUser, userStoraged}) {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage registerNewUser={registerNewUser}/>}/>            
            <Route path="dashboard" element={<DashBoardPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}