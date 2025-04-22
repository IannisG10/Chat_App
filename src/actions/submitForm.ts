import { InputField } from "@/entities/compoent-entities/authentification-entities";
import { UseFormReturn } from "react-hook-form"
import axios from "axios"

export const submitForm = async (data: InputField) => {
    
    try{
        const response = await axios.post("https://chat-app-api-5pvs.onrender.com/signup",data)
        if(!response || response.status !== 200){
            throw new Error("Immpossible to send data ")
        }
        return response
    }catch(err){
        console.log(err);
        throw new Error("Une erreur est survenue")
    }    
} 