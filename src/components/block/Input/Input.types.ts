import { Path } from "react-hook-form"
import { RegisterOptions } from "react-hook-form"

export interface InputFieldType {
    username: string
    email: string 
    password: string
    confirm_password: string
}

export interface InputProps {
    placeholder: string
    type: string
    field: Path<InputFieldType>
    options: RegisterOptions<InputFieldType>
}