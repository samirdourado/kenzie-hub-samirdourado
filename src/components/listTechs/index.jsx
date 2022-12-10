import React, { useContext } from "react"
import { TechContext } from "../../contexts/techContext"
import { UserContext } from "../../contexts/userContext"
import { Title } from "../../styles/typography"
import { ButtonTrash } from "../buttons"
import { ListTechAction, ListTechItem } from "./style"


export function ListTechs({ type, text, onClick, backgroundImage, tech, techId, techTitle, techStatus, handleDetailsOpen, i }) {
    // const { handleDetailsOpen } = useContext(TechContext)
    const { user } = useContext(UserContext)
    
    

    

    // VERIFICAR O VALOR DO INDEX NO ARRAY
    
    return(
        <ListTechItem techId={techId}>
            <Title>{techTitle}</Title>
            <ListTechAction>
                <p>{techStatus}</p>
                <ButtonTrash type={type} text={text} onClick={onClick} backgroundImage={backgroundImage} />
            </ListTechAction>
        </ListTechItem>
    )
    
}