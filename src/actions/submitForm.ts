import { InputField } from "@/entities/compoent-entities/authentification-entities";
import { UseFormReturn } from "react-hook-form"
import axios from "axios"



export const submitForm = async (data: InputField,methods: UseFormReturn<InputField>) => {
    
    try{
        const response = await axios.post("https://chat-app-api-5pvs.onrender.com/signup",data)
        console.log(response.data)
        methods.reset()
    }catch(err){
        console.log(err);
        
    }
    
} 