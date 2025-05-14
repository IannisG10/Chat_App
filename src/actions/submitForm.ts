import { InputFieldType } from "@/components/block/Input/Input.types"
import { type ToastProps } from "@/components/ui/toast"
import { UserPostService } from "@/services/users/user_post.service"

export const submitForm =   async (data: InputFieldType,URL: string,toast: (opts: ToastProps) =>void) => {
    try{
        const res = await UserPostService(data, URL)
        toast({
            title: `${URL.includes("signup") ? 
                    'Insciption réussi': URL.includes("login") && 
                    "Connexion réussi"}`,
            variant: "success"
        })
        console.log(res)

        return res 
    }catch(err){
        toast({
            title: `${err}`,
            variant: "destructive"
        })
    }
}