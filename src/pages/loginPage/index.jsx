import { useForm } from "react-hook-form"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { LogAndRegisterBg, LogAndRegisterFooter } from "../../components/containersLoginRegister/style"
import { Input } from "../../components/inputs"
import { MainContainer } from "../../components/mainContainer/style"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { Button } from "../../components/buttons"
import { useState, useContext } from "react"
import { FormDivToInput, FormLogAndRegister } from "../../components/form/style"
import { InputErrorMessage, Logo, Title, TitleSub } from "../../styles/typography"
import { UserContext } from "../../contexts/userContext"

export function LoginPage({}) {

    const { loginUser } = useContext(UserContext)

    const [loading, setLoading] =useState(false)

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(loginSchema)
    })

    const submit = (eventLoginData) => {
        loginUser(eventLoginData, setLoading)
        reset()
    }

    return(
        <MainContainer>
                <div>
                    <Logo>Kenzie Hub</Logo>
                </div>
            <LogAndRegisterBg>
                <div>
                    <Title>Login</Title>
                </div>

                <FormLogAndRegister noValidate onSubmit={handleSubmit(submit)}>
                    <FormDivToInput>
                        <Input type="email" id="email" label="E-mail: " placeholder="Digite aqui seu email" register={register("email")} disabled={loading}/>
                        {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
                    </FormDivToInput>

                    <FormDivToInput>
                        <Input type="password" id="password" label="Senha: " placeholder="Crie uma senha" register={register("password")} disabled={loading}/>
                        {errors.password && <InputErrorMessage>{errors.password.message}</InputErrorMessage>}
                    </FormDivToInput>
                
                    <Button text={"Entrar"} type={"submit"} disabled={loading}>{loading ? "Entrando" : "Entrar"}</Button>
                </FormLogAndRegister>

                <LogAndRegisterFooter>
                    <TitleSub>Ainda não possui uma conta?</TitleSub>
                    <Link to="/register">Cadastre-se</Link>                    
                </LogAndRegisterFooter>
                
            </LogAndRegisterBg>            
        </MainContainer>
    )
}