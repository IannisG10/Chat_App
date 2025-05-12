import { InputFieldType } from "@/components/block/Input/Input.types";
import axios from "axios";

export const UserPostService = async (data: InputFieldType,URL: string) => {
    
        await fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(datas => {
            console.log(datas.message.token)
        }).catch(err => console.log(err))
        
}