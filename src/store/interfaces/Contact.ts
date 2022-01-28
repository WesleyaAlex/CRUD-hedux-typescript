import * as Yup from 'yup'

export interface Contact {
    id?: string;
    name: string;
    age: number | '';
}

export const validationScheme = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório").min(5, "Digite pelo menos 5 caracteres"),
    age: Yup.number().required("Campo obrigatório").min(10, "Idade mínima é 10 anos"),
})