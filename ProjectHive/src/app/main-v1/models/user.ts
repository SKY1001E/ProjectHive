export interface User {
    id: number,
    login: string,
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    role?: string,
    profileImage?: any
}
