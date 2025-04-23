// Importante : When fetching data about user is avalaible,remove the `?`
export interface User {
    username: string
    email?: string
    password?: string
    profileImage: string
}