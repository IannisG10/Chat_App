import { Path } from "react-hook-form"
import { RegisterOptions } from "react-hook-form"
export interface InputField {
    username: string
    email: string
    password: string
    confirm_password: string
}

export interface InputProps {
    placeholder: string
    field: Path<InputField>
    type: string
    options: RegisterOptions<InputField>
}

