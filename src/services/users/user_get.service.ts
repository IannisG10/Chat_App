const token = localStorage.getItem("token")

type MutationParams = {
    URL: string
}

export const userGetService = async () => {
    try{
        const res = await fetch("",{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if(!res.ok){
            throw new Error("Accès non autorisé")
        }

        return res;
    }catch(err){
        throw err
    }


}