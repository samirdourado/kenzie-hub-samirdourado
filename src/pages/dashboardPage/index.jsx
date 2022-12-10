import { Button, ButtonExit, ButtonModalAdd } from "../../components/buttons"
import { ContainerUserLogged, MainActionUserDiv, UserHeader, UserMain, UserNav } from "../../components/containerProfile/style"
import { Logo, Title, TitleSub } from "../../styles/typography"
import { NotFoundPage } from "../notFoundPage"
import { apiData } from "../../services/api"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { ListTechs } from "../../components/listTechs"
import { ListTechHolder } from "../../components/listTechs/style"
import { ModalAdd } from "../../components/modalHolder"
import { IoTrashBinOutline } from "react-icons/io5"
import { ModalDetails } from "../../components/modalEditDelete"
import { TechContext } from "../../contexts/techContext"


export function DashBoardPage() {

    const { user, setUser, logoutUser } = useContext(UserContext)    
    const { createTechnology, userTech, createModal, detailsModal, setDetailsModal, 
        handleOpenModal, handleCloseModal, handleDetailsOpen, handleDetailsClose } = useContext(TechContext)
    
    return(        
        <div>
            {               
                user ? (
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
                                    onClick={(event) => handleOpenModal(event)}                                    
                                />
                            </MainActionUserDiv>

                            <ListTechHolder>                                
                                {
                                    user.techs.map((tech, i) =>                                    
                                        <ListTechs
                                            // key={tech.id}
                                            key={i}
                                            type="button"
                                            text="X"
                                            techId={tech.id}
                                            techTitle={tech.title}
                                            techStatus={tech.status}
                                            onClick={(event) => handleDetailsOpen(event)}
                                            i={i}
                                            tech={tech}
                                            
                                        />
                                    )
                                }
                            </ListTechHolder>

                            {
                                createModal ? 
                                    <ModalAdd
                                        type="button"
                                        text="X"
                                        onClick={(event) => handleCloseModal(event)}
                                        // submit={submit}
                                        handleCloseModal={handleCloseModal}
                                        
                                    />
                                    : 
                                    <>
                                </>
                            }
                            {/* { console.log(user.techs) } */}

                            {   
                                
                                detailsModal ?
                                    <ModalDetails                                        
                                        type="button"
                                        // text="X"
                                        onClick={(event) => handleDetailsClose(event)}
                                    />
                                    :
                                    <>
                                </>                                
                            }
                        </UserMain>

                    </ContainerUserLogged>
            ) : (
                <>
                    <NotFoundPage logoutUser={logoutUser}/>
                </>                
                )
            }
        </div>        
    )
}