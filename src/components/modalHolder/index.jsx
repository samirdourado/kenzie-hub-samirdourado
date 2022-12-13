import { yupResolver } from "@hookform/resolvers/yup"
import { React, useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../contexts/techContext"
import { UserContext } from "../../contexts/userContext"
import { InputErrorMessage, Title } from "../../styles/typography"
import { Button, ButtonGeneric } from "../buttons"
import { FormDivToInput } from "../form/style"
import { Input } from "../inputs"
import { SelectLabel } from "../select/style"
import { SelectTech } from "../selectTech"
import { newTechSchema } from "./newTechSchema"
import { BackdropModal, ModalBody, ModalHolder, ModalTitle } from "./style"

export function ModalAdd({ type, text, }) {

    const { loading, setLoading } = useContext(UserContext)
    const { createTechnology, setCreateModal } = useContext(TechContext)
    
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(newTechSchema)
    })

    const submit = (eventLoginData) => {
        createTechnology(eventLoginData)
        reset()
    }

    return(
        <BackdropModal>
            <ModalHolder>
                <ModalTitle>
                    <Title>Cadastrar Tecnologia</Title>
                    <ButtonGeneric type={type} text={text} onClick={() => setCreateModal(false)}/>
                </ModalTitle>
                
                <ModalBody noValidate onSubmit={handleSubmit(submit)}>
                    <FormDivToInput>
                        <Input type="text" id="title" label="Nome: " placeholder="Digite a tecnologia" register={register("title")} />
                        {errors.title && <InputErrorMessage>{errors.title.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <SelectLabel>Selecionar status</SelectLabel>
                        <SelectTech register={register}/>
                        {errors.status && <InputErrorMessage>{errors.status.message}</InputErrorMessage>}
                    </FormDivToInput>
                    
                    <Button text={loading ? "Cadastrando..." : "Cadastrar Tecnologia"} type={"submit"} onClick={() => createTechnology()} />
                </ModalBody>

            </ModalHolder>
        </BackdropModal>
    )
}