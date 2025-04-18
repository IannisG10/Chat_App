import { InputField } from "@/entities/compoent-entities/authentification-entities";
import { UseFormReturn } from "react-hook-form";

export const submitForm = (data: InputField,methods: UseFormReturn<InputField>) => {
    console.log(data);
    methods.reset()
    
} 