import React from "react"

export function Button({text, type, logoutUser}) {
    return(
        <button type={type} onClick={() => logoutUser()}>{text}</button>
    )
    
}