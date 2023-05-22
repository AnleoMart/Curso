import { Component } from '@angular/core';
import { Curso } from '../Curso';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  listCursos:string[];
  miCurso = new Curso();
  respuesta:string;

  constructor(){
    this.listCursos=this.miCurso.getCursos();
    this.respuesta=" ";
  }

  getInscribir(nombre:string, edad:string, curso:string){
    this.miCurso.inscribir(nombre, edad, curso);
    this.respuesta=this.miCurso.respuesta;
  }
}
