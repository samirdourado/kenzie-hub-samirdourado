import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome precisa de pelo menos 3 caracteres"),

    email: yup
        .string()
        .required("Email é obrigatório")
        .email("E-mail inválido."),

    password: yup
        .string()
        .required("Senha obrigatória")
        .min(6, "A senha precisa de pelo menos 6 caracteres")
        .max(6, "Senha pode ter maximo de 6 caracteres"),
    
    passwordConfirm: yup
        .string()
        .required("Repita sua senha")
        .min(6,"Minimo de 6 caracteres")
        .max(6, "Senha pode ter maximo de 6 caracteres")
        .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
        // .oneOf([yup.ref("password"), yup.ref("passwordConfirm")]),

    bio: yup
        .string()
        .required("Preciso saber da sua vida")
        .min(10, "Conte em pelo menos 10 caracteres"),

    contact: yup
        .string("Contato obrigatório")
        .required("Contato é obrigatório")
        .min(8, "Informe seu contato com pelo menos 6 caracteres")
        .max(50, "Máximo 50 caracteres"),

    course_module: yup
        .string()
        .required("Escolha um módulo válido")
})