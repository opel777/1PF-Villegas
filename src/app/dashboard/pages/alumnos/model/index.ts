export interface Alumno{
    id: number;
    name:string;
    surname:string;
    email:string;
    password:string;
    token:string;
}

export interface CreateAlumnoData{
    id?: number;
    name?:string;
    surname?:string;
    email?:string;
    password?:string;
}

export interface UpdateAlumnoData{
    id?: number;
    name?:string;
    surname?:string;
    email?:string;
    password?:string;
}