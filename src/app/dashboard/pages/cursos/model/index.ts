export interface Cursos{
    id: number;
    logo:string;
    name:string;
    description:string;
    
}

export interface CreateCursosData{
    id: number;
    logo:string;
    name:string;
    description:string;
}

export interface UpdateCursosData{
    id?: number;
    logo?:string;
    name?:string;
    description?:string;
}