export interface Cursos{
    id: number;
    image:string;
    title:string;
    subtitle:string;
    description:string;
    inscripcionId:number
    
}

export interface CreateCursosData{
    id: number;
    image:string;
    title:string;
    subtitle:string;
    description:string;
    inscripcionId:number
}

export interface UpdateCursosData{
    id?: number;
    image?:string;
    title?:string;
    subtitle?:string;
    description?:string;
    inscripcionId:number
}