export interface User {
    id: number;
    username:string;
    name: string;
    email: string;
    birthdate:string;
    password:string;
    isAdmin: boolean;
    token?: string;
    // Agregar las propiedades necesarias
}  