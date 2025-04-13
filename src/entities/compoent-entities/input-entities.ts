import { Path,RegisterOptions } from "react-hook-form"
import { InputField } from "../application-entities/authentication"

export interface InputProps {
    placeholder: string
    label: Path<InputField>
    options: RegisterOptions<InputField>
}
