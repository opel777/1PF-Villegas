export interface Materia{
    id: number;
    name:string;
    nameteacher:string;
    inscripcionId:number
    
}
export interface CreateMateriaData{
    id: number;
    name:string;
    nameteacher:string;
    inscripcionId:number
}

export interface UpdateMateriaData{
    id?: number;
    name?:string;
    nameteacher?:string;
    inscripcionId:number
}