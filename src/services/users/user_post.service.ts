import { InputFieldType } from "@/components/block/Input/Input.types";
import axios from "axios";

export const UserPostService = async (data: InputFieldType,URL: string) => {
    try {
        const response = await axios.post(URL,data,{
            withCredentials: true
        })
        if(!response || response.status !== 200){
            throw new Error()
        }
        return response
    } catch (error) {
        console.log(error)
        throw new Error("Impossible to send data")
    }
}