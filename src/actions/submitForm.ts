import { InputFieldType } from "@/components/block/Input/Input.types"
import axios from "axios"

export const submitForm = async (data: InputFieldType,URL: string) => {
    
    try{
        const response = await axios.post(URL,data,{withCredentials: true})
        if(!response || response.status !== 200){
            throw new Error("Immpossible to send data ")
        }
        return response
    }catch(err){
        console.log(err);
        throw new Error("Une erreur est survenue")
    }    
} 

// export const onSubmit = async (data: InputFieldType,URL: string) => {
//     try{
//         await submitForm(data,URL)
//     }catch(err){
//         console.error(err)
//     }
// }