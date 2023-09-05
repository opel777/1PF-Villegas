import { Alumno } from "../../alumnos/model";
import { Cursos } from "../../cursos/model";


export interface Inscripcion{
    id:number;
    cursoId:number;
    alumnoId:number;
}

export interface InscripcionWithCursoAndAlumno extends Inscripcion{
    curso:Cursos;
    alumno:Alumno
}

export interface CreateInscripcionPayload{
    cursoId:number | null;
    alumnoId:number | null
} 