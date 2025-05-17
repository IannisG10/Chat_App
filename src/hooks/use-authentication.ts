import { useMutation } from "@tanstack/react-query";
import { submitForm } from "@/actions/submitForm";
import { InputFieldType } from "@/components/block/Input/Input.types";
import { UseFormReturn } from "react-hook-form";
import { usePathname,useRouter } from "next/navigation";

const router = useRouter()
const pathname =  usePathname()

export const useAuthentication = (methods: UseFormReturn<InputFieldType>) => {
    return useMutation({
        mutationFn: submitForm,
        onSuccess: () => {
            methods.reset();
            if(pathname === "/authentication/Signup"){
                router.push("/authentication/Signin")
            }else if(pathname === "/authentication/Signin"){
                router.push("/Home")
            }
        },
        onError: () => {
            methods.reset()
        }
    })
}