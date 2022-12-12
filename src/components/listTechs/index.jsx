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