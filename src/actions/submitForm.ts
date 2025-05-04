import { InputFieldType } from "@/components/block/Input/Input.types"
import { type ToastProps } from "@/components/ui/toast"
import { UserPostService } from "@/services/users/user_post.service"
import axios from "axios"

export const submitForm = async (data: InputFieldType,URL: string) => {
    
    try{
        const response = await axios.post(URL,data,{withCredentials: true})
        if(!response || response.status !== 200){
            throw new Error()
        }
        return response
    }catch(err){
        console.log(err);
        throw new Error("Une erreur est survenue")
    }    
} 

export const FormSubmit = async(data: InputFieldType,URL: string,toast: (opts: ToastProps) =>void) => {
    
    try {
        await UserPostService(data,URL);
        toast({
            title: `${URL.includes("signup") ? 'Insciption réussi': URL.includes("login") && "Connexion réussi"}`,
            variant: "success"
        })
        
    } catch (error) {
        toast({
            title:`${error}`,
            variant: "destructive"
        })
    }
}