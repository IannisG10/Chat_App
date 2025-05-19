
export const userGetService = async () => {
    const token = localStorage.getItem("token")
    try{
        const res = await fetch("http://localhost:3500/auth",{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if(!res.ok){
            throw new Error("Accès non autorisé")
        }

        return res.json();
    }catch(err){
        throw err
    }


}