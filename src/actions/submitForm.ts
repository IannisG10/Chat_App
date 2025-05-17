import { InputFieldType } from "@/components/block/Input/Input.types"
import { type ToastProps } from "@/components/ui/toast"
import { UserPostService } from "@/services/users/user_post.service"
import { useMutation } from "@tanstack/react-query"
import { UseFormReturn } from "react-hook-form"
import { useRouter,usePathname } from "next/navigation"

type MutationVariable = {
    data: InputFieldType,
    URL: string,
    toast: (opts: ToastProps) =>void
}

const router = useRouter()
const pathname = usePathname()

export const useAuthentication = (methods: UseFormReturn<InputFieldType>) => {
    return useMutation({
        mutationFn: submitForm,
        onSuccess: () => {
            methods.reset()
            if(pathname === "/authentication/Signup"){
                router.push("/authentication/Signin")
            }else if(pathname === "/authentication/Signup"){
                router.push("/Home")
            }
        },
        onError: ()=> {
            methods.reset()
        }
    })
}

export const submitForm =   async ({
        data,
        URL,
        toast
} : MutationVariable ) => {
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