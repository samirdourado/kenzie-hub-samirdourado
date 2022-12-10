import { React, useContext } from "react"
import { useForm } from "react-hook-form"
import { InputErrorMessage, Title } from "../../styles/typography"
import { Button, ButtonDelete, ButtonGeneric } from "../buttons"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormDivToInput } from "../form/style"
import { Input } from "../inputs"
import { BackdropModal, ModalBody, ModalHolder, ModalTitle } from "../modalHolder/style"
import { SelectLabel } from "../select/style"
import { SelectTech } from "../selectTech"
import { editTechSchema } from "./editTechSchema"
import { TechContext } from "../../contexts/techContext"
import { UserContext } from "../../contexts/userContext"

export function ModalDetails({ type, text, onClick }) {

    const { editTechnology } = useContext(TechContext)
    const { user } = useContext(UserContext)
    // console.log(user.techs)

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(editTechSchema)
    })
    
    const submit = (eventLoginData) => {
        editTechnology(eventLoginData)
        reset()        
    }


    return(
        <BackdropModal>
            <ModalHolder>
                <ModalTitle>
                    <Title>Tecnologia Detalhes</Title>
                    <ButtonGeneric type={type} text="X" onClick={onClick}/>
                </ModalTitle>
                
                <ModalBody noValidate onSubmit={handleSubmit(submit)} key={user.techs.id}>
                    <FormDivToInput>
                        <Input type="text" id="title" label="Nome do projeto: " placeholder="Atualize a tecnologia" register={register("title")}/>
                        {errors.title && <InputErrorMessage>{errors.title.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <SelectLabel>Selecionar status</SelectLabel>
                        <SelectTech register={register}/>
                        {errors.status && <InputErrorMessage>{errors.status.message}</InputErrorMessage>}
                    </FormDivToInput>
                    
                    <Button text="Salvar alterações" type={"submit"}/>                    
                </ModalBody>

                <ButtonDelete type={type} text="Excluir" onClick={onClick} />
            </ModalHolder>
        </BackdropModal>
    )
}

