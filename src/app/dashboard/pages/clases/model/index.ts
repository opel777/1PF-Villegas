export interface Materia{
    id: number;
    name:string;
    nameteacher:string;
    
}
export interface CreateMateriaData{
    id: number;
    name:string;
    nameteacher:string;
}

export interface UpdateMateriaData{
    id?: number;
    name?:string;
    nameteacher?:string;
}