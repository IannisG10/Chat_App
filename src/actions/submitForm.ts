import { UseFormReturn } from "react-hook-form";
import { InputField } from "@/entities/application-entities/authentication";

export const submitForm = (data: InputField,methods: UseFormReturn<InputField>) => {
    console.log("Formulaire validé :",data)
    methods.reset()
}