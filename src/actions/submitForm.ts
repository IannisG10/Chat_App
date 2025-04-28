import { InputFieldType } from "@/components/block/Input/Input.types"
import axios from "axios"

export const submitForm = async (data: InputFieldType) => {
    
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

export const onSubmit = async (data: InputFieldType) => {
    try{
        await submitForm(data)
    }catch(err){
        console.error(err)
    }
}