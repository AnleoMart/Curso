export class Curso{
  curso:string[];
  respuesta:string;

  constructor(){
    this.curso=['java1', 'java2','Oracle', 'PHP1', 'PHP2', 'JavaScript', 'typeScript'];
    this.respuesta=" ";
  }
  getCursos(): string[]{
    return this.curso;
  }

  inscribir(nombre:string, edad:string, curso:string){
    this.respuesta=`se ha inscrito al curso: ${curso}, Estudiante: ${nombre} edad: ${edad}`
  }
}
