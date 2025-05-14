import { InputFieldType } from "@/components/block/Input/Input.types";

export const UserPostService =  async (data: InputFieldType,URL: string) => {
    try{
        const res = await fetch(URL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
        })
        if(!res.ok) throw new Error("Login Error ")
        const result = await res.json()

        return result

    }catch(err){
        console.log(err)
        throw err
    }
    
}