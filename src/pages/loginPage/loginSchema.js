import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email é obrigatório")
        .email("E-mail inválido."),
        
    password: yup
        .string()
        .required("Senha obrigatória")
        .min(6, "A senha precisa de pelo menos 6 caracteres")
        .max(6, "Senha pode ter maximo de 6 caracteres")
})
