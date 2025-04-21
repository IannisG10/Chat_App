import { InputField } from "@/entities/compoent-entities/authentification-entities";
import { UseFormReturn } from "react-hook-form"
import axios from "axios"


export const submitForm = (data: InputField,methods: UseFormReturn<InputField>) => {
    console.log(data);
    axios.post("https://chat-app-api-5pvs.onrender.com/signup",data)
    .then((res)=>{
        console.log(res);
    }).catch((err)=> {
        console.log(err);
    })
    methods.reset()
    
} 