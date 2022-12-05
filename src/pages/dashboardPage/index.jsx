import { ButtonExit } from "../../components/buttons"
import { ContainerUserLogged, UserHeader, UserMain, UserNav } from "../../components/containerProfile/style"
import { Logo, Title, TitleSub } from "../../styles/typography"
import { NotFoundPage } from "../notFoundPage"

export function DashBoardPage({user, logoutUser}) {
    
    return(        
        <div>            
            {
                user === null ? (
                <>
                    <NotFoundPage logoutUser={logoutUser}/>
                </>
            ) : (
                <ContainerUserLogged>
                    <UserNav>
                        <Logo>Kenzie Hub</Logo>
                        <ButtonExit text="Sair" type={"submit"} logoutUser={logoutUser} />
                    </UserNav>                    
                    <UserHeader>
                        <Title>Olá {user.name}</Title>
                        <TitleSub>Olá {user.course_module}</TitleSub>
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