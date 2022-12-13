import { ButtonExit, ButtonModalAdd } from "../../components/buttons"
import { ContainerUserLogged, MainActionUserDiv, UserHeader, UserMain, UserNav } from "../../components/containerProfile/style"
import { Logo, Title, TitleSub } from "../../styles/typography"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { ListTechs, ListTechsEmpty } from "../../components/listTechs"
import { ListTechHolder } from "../../components/listTechs/style"
import { ModalAdd } from "../../components/modalHolder"
import { ModalDetails } from "../../components/modalEditDelete"
import { TechContext } from "../../contexts/techContext"
import { Loader } from "../../components/loader"
import { NotFoundPage } from "../notFoundPage"
import { BiAddToQueue } from "react-icons/bi"
import { Link, Navigate, useNavigate } from "react-router-dom"

export function DashBoardPage() {

    const { user, logoutUser, loading, setLoading } = useContext(UserContext) 

    const { createModal, detailsModal, setDetailsModal, setUserTech, setCreateModal } = useContext(TechContext)

    const getToken = JSON.parse(localStorage.getItem("@KenzieHub"))

    const navigate = useNavigate()
    
    return(
        <div>

            {
                getToken === null &&
                navigate("*")
                // <NotFoundPage/>
            }
             

            {
                user && 

                <ContainerUserLogged>
                    <UserNav>
                        <Logo>Kenzie Hub</Logo>
                        <ButtonExit text="Sair" type={"submit"} logoutUser={logoutUser} />
                    </UserNav>                    
                    <UserHeader>
                        <Title>Olá {user.name}</Title>
                        <TitleSub>{user.course_module}</TitleSub>                            
                    </UserHeader>

                    <UserMain>
                        <MainActionUserDiv>
                            <Title>Tecnologias</Title>
                            <ButtonModalAdd
                                text="+"
                                type={"button"}
                                onClick={() => setCreateModal(true)}                                    
                            />
                        </MainActionUserDiv>

                        <ListTechHolder>
                            {user.techs.length ? 
                                (
                                    user.techs.map((tech, i) =>                                    
                                        <ListTechs
                                            key={tech.id}
                                            type="button"
                                            techId={tech.id}
                                            techTitle={tech.title}
                                            techStatus={tech.status}
                                            tech={tech}
                                            onClick={ 
                                                () => {
                                                    setDetailsModal(true);
                                                    setUserTech(tech)
                                                }
                                            }
                                        />
                                    )
                                ) : 
                                (                                         
                                    <ListTechsEmpty/>
                                )
                            }

                            
                        </ListTechHolder>

                        {
                            createModal ? 
                                <ModalAdd
                                    type="button"
                                    text="X"                                        
                                />
                                : 
                                <>
                            </>
                        }

                        {                                   
                            detailsModal ?
                                <ModalDetails                                        
                                    type="button"                                        
                                    onClick={() => setDetailsModal(false)}
                                />
                                :
                                <>
                            </>                                
                        }
                    </UserMain>
                    {loading && <Loader/>}
                </ContainerUserLogged>
            }
        </div>        
    )
}