import { InputFieldType } from "@/components/block/Input/Input.types"
import { type ToastProps } from "@/components/ui/toast"
import { UserPostService } from "@/services/users/user_post.service"

export const submitForm =   (data: InputFieldType,URL: string,toast: (opts: ToastProps) =>void) => {
    
        UserPostService(data, URL)
        toast({
            title: `${URL.includes("signup") ? 'Insciption réussi': URL.includes("login") && "Connexion réussi"}`,
            variant: "success"
        })
    
}