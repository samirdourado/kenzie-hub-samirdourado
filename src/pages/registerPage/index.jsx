import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, } from "react-router-dom"
import { LogAndRegisterBg, LogAndRegisterHeader, LogAndRegisterTitleArea } from "../../components/containersLoginRegister/style"
import { Input } from "../../components/inputs"
import { MainContainer } from "../../components/mainContainer/style"
import { SelectField } from "../../components/select"
import { yupResolver} from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"
import { Button } from "../../components/buttons"
import { Logo, Title, TitleSub, InputErrorMessage } from "../../styles/typography"
import { FormLogAndRegister, FormDivToInput } from "../../components/form/style"
import { SelectLabel } from "../../components/select/style"
import { UserContext } from "../../contexts/userContext"

export function RegisterPage({}) {
    const { registerNewUser, loading, setLoading } = useContext(UserContext)

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    function submit(eventRegisterData) {
        registerNewUser(eventRegisterData, setLoading)
        reset()
    }

    return(
        <MainContainer>
            <LogAndRegisterTitleArea>
                <Logo>Kenzie Hub</Logo>
                <Link to={"/"}>Voltar</Link>
            </LogAndRegisterTitleArea>
            
            <LogAndRegisterBg>

                <LogAndRegisterHeader>
                    <Title>Crie sua conta</Title>
                    <TitleSub>Rápido e grátis, vamos nessa</TitleSub>
                </LogAndRegisterHeader>

                <FormLogAndRegister noValidate onSubmit={handleSubmit(submit)}>   
                    <FormDivToInput>
                        <Input type="text" id="name" label="Nome: " placeholder="Digite aqui seu nome" register={register("name") } disabled={loading}/>
                        {errors.name && <InputErrorMessage>{errors.name.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <Input type="email" id="email" label="E-mail: " placeholder="Digite aqui seu email"register={register("email")} disabled={loading}/>
                        {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <Input type="password" id="password" label="Senha: " placeholder="Crie uma senha" register={register("password")} disabled={loading}/>
                        {errors.password && <InputErrorMessage>{errors.password.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <Input type="password" id="passwordConfirm" label="Confirme sua Senha: " placeholder="Digite a mesma senha" register={register("passwordConfirm")} disabled={loading}/>
                        {errors.passwordConfirm && <InputErrorMessage>{errors.passwordConfirm.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <Input type="text" id="bio" label="Bio: " placeholder="Fale sobre você" register={register("bio")} disabled={loading}/>
                        {errors.bio && <InputErrorMessage>{errors.bio.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <Input type="text" id="contact" label="Contato: " placeholder="Digite seu número" register={register("contact")} disabled={loading}/>
                        {errors.contact && <InputErrorMessage>{errors.contact.message}</InputErrorMessage>}
                    </FormDivToInput>
                    
                    <FormDivToInput>
                        <SelectLabel>Selecionar Módulo</SelectLabel>
                        <SelectField register={register} />
                        {errors.course_module && <InputErrorMessage>{errors.course_module.message}</InputErrorMessage>}
                    </FormDivToInput>
                    
                    <Button text={ loading ? "Cadastrando..." : "Cadastrar" } type={"submit"} disabled={loading}/>
                </FormLogAndRegister>
                
            </LogAndRegisterBg>
        </MainContainer>        
    )
}