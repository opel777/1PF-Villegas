export interface User{
    id: number;
    name:string;
    surname:string;
    email:string;
    password:string;
    token:string;
    rol:'ADMINISTRADOR'|'USUARIO'
}

export interface CreateUserData{
    id?: number;
    name?:string;
    surname?:string;
    email?:string;
    password?:string;
}

export interface UpdateUserData{
    id?: number;
    name?:string;
    surname?:string;
    email?:string;
    password?:string;
    token:string;
}