import { InputFieldType } from "@/components/block/Input/Input.types";
import axios from "axios";
import { error } from "console";

export const UserPostService =  (data: InputFieldType,URL: string) => {
        fetch(URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(!res.ok) {
                throw new Error("Login error")
            }
            return res.json()
        })
        
}