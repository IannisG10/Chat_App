import { useQuery } from "@tanstack/react-query"
import { userGetService } from "@/services/users/user_get.service"


export const useFethUser = (URL: string) => {
    return useQuery({
        queryKey: ['user'],
        queryFn: userGetService
    })
}