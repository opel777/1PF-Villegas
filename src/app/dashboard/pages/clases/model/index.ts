export interface Materia{
    id: number;
    title:string;
    nameteacher:string;
    inscripcionId:number
    
}
export interface CreateMateriaData{
    id: number;
    title:string;
    nameteacher:string;
    inscripcionId:number
}

export interface UpdateMateriaData{
    id?: number;
    title?:string;
    nameteacher?:string;
    inscripcionId:number
}