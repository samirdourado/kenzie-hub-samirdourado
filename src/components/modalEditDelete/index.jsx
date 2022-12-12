import { React, useContext } from "react"
import { useForm } from "react-hook-form"
import { InputErrorMessage, Title } from "../../styles/typography"
import { Button, ButtonDelete, ButtonGeneric } from "../buttons"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormDivToInput } from "../form/style"
import { Input, InputEdit } from "../inputs"
import { BackdropModal, ModalBody, ModalHolder, ModalTitle } from "../modalHolder/style"
import { SelectLabel } from "../select/style"
import { SelectTech } from "../selectTech"
import { editTechSchema } from "./editTechSchema"
import { TechContext } from "../../contexts/techContext"
import { UserContext } from "../../contexts/userContext"

export function ModalDetails({ type, onClick }) {
    
    const { loading, delLoading} = useContext(UserContext)
    const { editTechnology, deleteTechnology, userTech, } = useContext(TechContext)
    

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(editTechSchema)
    })
    
    const submit = (formData) => {
        editTechnology(formData, userTech.id)
        reset()        
    }


    return(
        <BackdropModal>
            <ModalHolder>
                <ModalTitle>
                    <Title>Tecnologia Detalhes</Title>
                    <ButtonGeneric type={type} text="X" onClick={onClick}/>
                </ModalTitle>

                <ModalBody noValidate onSubmit={handleSubmit(submit)} >
                    <FormDivToInput>
                        <InputEdit type="text" id="title" label="Nome do projeto: " placeholder="Atualize a tecnologia" register={register("title")} userTech={userTech} />
                        {errors.title && <InputErrorMessage>{errors.title.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <SelectLabel>Selecionar status</SelectLabel>
                        <SelectTech register={register}/>
                        {errors.status && <InputErrorMessage>{errors.status.message}</InputErrorMessage>}
                    </FormDivToInput>
                    
                    <Button text={loading ? "Salvando..." : "Salvar alterações"} type={"submit"}/>                    
                </ModalBody>

                <ButtonDelete type={type} text={delLoading ? "Excluindo..." : "Excluir"} onClick={() => deleteTechnology(userTech.id)} />
            </ModalHolder>
        </BackdropModal>
    )
}