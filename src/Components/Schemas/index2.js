import * as Yup from "yup"
export const signUpSchema2=Yup.object({
    email:Yup.string().email().required("email is required"),
    password:Yup.string().min(4).required("password is required")
})