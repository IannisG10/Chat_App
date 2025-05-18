import { useQuery } from "@tanstack/react-query"
import { userGetService } from "@/services/users/user_get.service"


export const useFethUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: userGetService
    })
}