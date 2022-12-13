// import { useContext } from "react"
import { BiAddToQueue } from "react-icons/bi"
import { Title, TitleSub } from "../../styles/typography"
import { ButtonTrash } from "../buttons"
import { ListTechAction, ListTechItem } from "./style"

export function ListTechs({ type, text, onClick, tech, techId, techTitle, techStatus, }) {
    
    return(
        <ListTechItem techId={techId}>
            <Title>{techTitle}</Title>
            <ListTechAction>
                <TitleSub>{techStatus}</TitleSub>
                <ButtonTrash type={type} text={text} onClick={onClick} />
            </ListTechAction>
        </ListTechItem>
    )    
}


export function ListTechsEmpty() {
    
    return(
        <>
            <Title>Nenhuma tecnologia cadastrada!</Title>
            <Title>Clique no botão { <BiAddToQueue/> }  para criar uma tecnologia.</Title>
        </>
    )    
}