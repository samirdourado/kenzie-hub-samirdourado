import * as yup from "yup"

export const newTechSchema = yup.object().shape({
    title: yup
        .string()
        .required("Informe uma tecnologia"),
    
    status: yup
        .string()
        .required("Escolha uma técnologia válido")
})