import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { LogAndRegisterBg, LogAndRegisterTitleArea } from "../../components/containersLoginRegister/style"
import { Input } from "../../components/inputs"
import { MainContainer } from "../../components/mainContainer/style"
import { SelectField } from "../../components/select"
import { yupResolver} from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"
import { Button } from "../../components/buttons"
import { apiData } from "../../services/api"
import { toast, ToastContainer,  } from "react-toastify"
import { Logo, Title, TitleSub } from "../../styles/typography"


export function RegisterPage() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    async function registerNewUser(formData) {        
        try {
            setLoading(true)
            const response = await apiData.post(`users`, formData)
            toast.success("Conta criada com sucesso")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")

        } finally {
            setLoading(false)
        }
    }

    function submit(eventRegisterData) {
        registerNewUser(eventRegisterData)
        reset()
    }

    return(
        <MainContainer>
                <LogAndRegisterTitleArea>
                    <Logo>Kenzie Hub</Logo>
                    <Link to={"/"}>Voltar</Link>
                </LogAndRegisterTitleArea>
            <LogAndRegisterBg>

                <div>
                    <Title>Crie sua conta</Title>
                    <TitleSub>Rápido e grátis, vamos nessa</TitleSub>
                </div>

                <form noValidate onSubmit={handleSubmit(submit)}>   
                    <Input type="text" id="name" label="Nome: " placeholder="Digite aqui seu nome" register={register("name")}/>
                    {errors.name && <p>{errors.name.message}</p>}

                    <Input type="email" id="email" label="E-mail: " placeholder="Digite aqui seu email"register={register("email")}/>
                    {errors.email && <p>{errors.email.message}</p>}

                    <Input type="password" id="password" label="Senha: " placeholder="Crie uma senha" register={register("password")}/>
                    {errors.password && <p>{errors.password.message}</p>}

                    <Input type="password" id="passwordConfirm" label="Confirme sua Senha: " placeholder="Digite a mesma senha" register={register("passwordConfirm")}/>
                    {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

                    <Input type="text" id="bio" label="Bio: " placeholder="Fale sobre você" register={register("bio")}/>
                    {errors.bio && <p>{errors.bio.message}</p>}

                    <Input type="text" id="contact" label="Contato: " placeholder="Digite seu número" register={register("contact")}/>
                    {errors.contact && <p>{errors.contact.message}</p>}
                    
                    <SelectField register={register} />
                    {errors.course_module && <p>{errors.course_module.message}</p>}
                    
                    <Button text={ loading ? "Cadastrando" : "Cadastrar" } type={"submit"} disabled={loading}/>
                </form>
                
            </LogAndRegisterBg>

            <ToastContainer
                position="top-right"
                autoClose={1235}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </MainContainer>        
    )
}