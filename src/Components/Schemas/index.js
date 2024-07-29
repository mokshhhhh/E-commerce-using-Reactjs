
import * as Yup from "yup"

export const signUpSchema= Yup.object({
    name:Yup.string().min(2).max(30).required("Name is required"),
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(4).required("Password is required"),
    confirm_password: Yup.string().required(" password is to be confirmed").oneOf([Yup.ref("password"),null],"password must match"),

})