import { React, useContext} from "react"
import { ButtonAdd, ButtonConfirm, ButtonLogout, ButtonSub } from "./style"
import { UserContext } from "../../contexts/userContext"


export function Button({ text, type, onClick }) {
    return(
        <ButtonConfirm type={type} onClick={onClick}>{text}</ButtonConfirm>
    )    
}

export function ButtonExit({text, type}) {
    const { logoutUser } = useContext(UserContext)
    return(
        <ButtonLogout type={type} onClick={() => logoutUser()}>{text}</ButtonLogout>
    )    
}

export function ButtonModalAdd({text, type, onClick, handleCloseModal}) {
    return(
        <ButtonAdd type={type} onClick={onClick}>{text}</ButtonAdd>
    )    
}

export function ButtonTrash({text, type, onClick}) {
    return(
        <ButtonAdd type={type} onClick={onClick}  >{text}</ButtonAdd>
    )    
}

export function ButtonGeneric({text, type, onClick, backgroundImage}) {
    return(
        <ButtonAdd type={type} onClick={onClick} backgroundImage={backgroundImage} > {text} </ButtonAdd>
    )    
}

export function ButtonDelete({text, type, onClick, backgroundImage}) {
    return(
        <ButtonSub type={type} onClick={onClick} backgroundImage={backgroundImage} > {text} </ButtonSub>
    )    
}