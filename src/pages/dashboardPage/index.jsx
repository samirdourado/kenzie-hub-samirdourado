import { ButtonExit } from "../../components/buttons"
import { ContainerUserLogged, UserHeader, UserMain, UserNav } from "../../components/containerProfile/style"
import { Logo, Title, TitleSub } from "../../styles/typography"
import { NotFoundPage } from "../notFoundPage"
import { apiData } from "../../services/api"
import { useEffect, useState } from "react"

export function DashBoardPage({logoutUser}) {
    const [loading, setLoading] = useState(false)
    const [userLogged, setUserLogged] = useState([])    
    
    useEffect(() => {
        const getToken = JSON.parse(localStorage.getItem("@KenzieHub")) || [];
        
        if (getToken) {
            const getApi = async () => {
                try {
                    const response = await apiData.get("profile", {
                        headers: {
                            "Authorization": `Bearer ${getToken}`
                        }
                    })
                    
                    setUserLogged({
                        name: response.data.name,
                        course_module: response.data.course_module,
                    })
                    
                    } catch (error) {
                        console.log(error)
                    } finally {
                        setLoading(true)
                    }
                }
            getApi()
        }
    }, [])
    
    return(        
        <div>
            {
                userLogged.length === 0 ? (
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
                        <Title>Olá {userLogged.name}</Title>
                        <TitleSub>Olá {userLogged.course_module}</TitleSub>
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