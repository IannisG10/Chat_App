import { Path,RegisterOptions } from "react-hook-form"
import { InputField } from "../application-entities/authentication"
import { type } from "os"

type TypeInput = "text" | "password"
export interface InputProps {
    placeholder: string
    label: Path<InputField>
    options: RegisterOptions<InputField>
    type?: TypeInput
}
