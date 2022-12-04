import { ContainerUserLogged, LostNav, UserNav } from "../../components/containerProfile/style"
import { Logo, Title } from "../../styles/typography"
import { ButtonExit } from "../../components/buttons"

export function NotFoundPage({logoutUser}) {
    return(
        <ContainerUserLogged>
            <LostNav>
                <Logo>KenzieHub</Logo>
                <Title>404 - Página não encontrada, Clique em voltar para fazer o login.</Title>
                <ButtonExit text="Sair" type={"submit"} logoutUser={logoutUser}>Voltar</ButtonExit>
            </LostNav>
        </ContainerUserLogged>
    )
}