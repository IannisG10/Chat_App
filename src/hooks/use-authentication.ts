import { useMutation } from "@tanstack/react-query";
import { submitForm } from "@/actions/submitForm";
import { InputFieldType } from "@/components/block/Input/Input.types";
import { UseFormReturn } from "react-hook-form";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";




export const useAuthentication = (
        methods: UseFormReturn<InputFieldType>,
        router: AppRouterInstance,pathname: string) => {

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
