import { Link } from "react-router-dom"
import { ButtonExit } from "../../components/buttons"
import { ContainerUserLogged, UserHeader, UserMain, UserNav } from "../../components/containerProfile/style"
import { Logo, Title, TitleSub } from "../../styles/typography"

export function DashBoardPage({logoutUser, userStoraged}) {    
    
    const loggedUser = JSON.parse(userStoraged)

    return(        
        <div>            
            {
                loggedUser === null ? (
                <>
                    <Title>Sessão expirada</Title>
                    <Link to="/">Faça o Login</Link>                    
                </>
            ) : (
                <ContainerUserLogged>
                    <UserNav>
                        <Logo>Kenzie Hub</Logo>
                        <ButtonExit text="Sair" type={"submit"} logoutUser={logoutUser} />
                    </UserNav>                    
                    <UserHeader>
                        <Title>Olá {loggedUser.user.name}</Title>
                        <TitleSub>Olá {loggedUser.user.course_module}</TitleSub>
                    </UserHeader>
                    <UserMain>
                        <Title>Que pena! Estamos em desenvolvimento.</Title>
                        <TitleSub>Nossa aplicação está em desenvolvimento, em breve teremos novidades</TitleSub>
                    </UserMain>
                </ContainerUserLogged>
                )
            }
        </div>        
    )
}