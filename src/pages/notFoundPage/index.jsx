import { ContainerUserLogged, LostNav } from "../../components/containerProfile/style"
import { Logo, Title } from "../../styles/typography"
import { ButtonExit } from "../../components/buttons"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"

export function NotFoundPage() {
    
    const { logoutUser } = useContext(UserContext)

    return(
        <ContainerUserLogged>
            <LostNav>
                <Logo>KenzieHub</Logo>
                <Title>404 - Página não encontrada, Clique em voltar para fazer o login.</Title>
                <ButtonExit text="Sair" type="submit" logoutUser={logoutUser}>Voltar</ButtonExit>
            </LostNav>
        </ContainerUserLogged>
    )
}