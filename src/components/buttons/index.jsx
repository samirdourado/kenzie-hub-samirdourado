import { React, useContext} from "react"
import { ButtonAdd, ButtonConfirm, ButtonLogout, ButtonSub } from "./style"
import { UserContext } from "../../contexts/userContext"
import { BiAddToQueue, BiEdit, BiWindowClose, } from "react-icons/bi"


export function Button({ text, type, onClick }) {
    return(
        <ButtonConfirm type={type} onClick={onClick}>{text}</ButtonConfirm>
    )    
}

export function ButtonExit({ text, type }) {
    const { logoutUser } = useContext(UserContext)
    return(
        <ButtonLogout type={type} onClick={() => logoutUser()}>{text}</ButtonLogout>
    )    
}

export function ButtonModalAdd({ type, onClick, }) {
    return(
        <ButtonAdd type={type} onClick={onClick}><BiAddToQueue size="1.8rem" /></ButtonAdd>
    )    
}

export function ButtonTrash({ type, onClick, }) {
    return(        
        <ButtonAdd type={type} onClick={onClick}  ><BiEdit size="1.9rem"/></ButtonAdd>
    )    
}

export function ButtonGeneric({ type, onClick, }) {
    return(
        <ButtonAdd type={type} onClick={onClick}> <BiWindowClose size="1.9rem"/>  </ButtonAdd>
    )    
}

export function ButtonDelete({ text, type, onClick, backgroundImage }) {
    return(
        <ButtonSub type={ type } onClick={ onClick } backgroundImage={ backgroundImage } > {text} </ButtonSub>
    )    
}