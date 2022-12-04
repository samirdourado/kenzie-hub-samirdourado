import React from "react"
import { ButtonConfirm, ButtonLogout } from "./style"

export function Button({text, type, logoutUser}) {
    return(
        <ButtonConfirm type={type}>{text}</ButtonConfirm>
    )    
}

export function ButtonExit({text, type, logoutUser}) {
    return(
        <ButtonLogout type={type} onClick={() => logoutUser()}>{text}</ButtonLogout>
    )    
}