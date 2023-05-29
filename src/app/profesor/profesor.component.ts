import { Component } from '@angular/core';
import { ProfesorOI } from './ProfesorOI';
import { ProfesorI } from './ProfesorI';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements ProfesorOI {
  profesor!: { nombres: string; apellidos: string; edad: number; direccion: string; };
  profesores!:Array<any|object>;

  constructor() {
    this.profesor={
      nombres: '',
      apellidos: '',
      edad: 0,
      direccion: ''

    };
    this.profesores=[
      {nombres: 'Andres', apellidos: 'Martinez', edad: 24, direccion:"Bosa estacion"},
      {nombres: 'Paola', apellidos: 'Aleman', edad: 24, direccion:"Perdomo"},
      {nombres: 'German', apellidos: 'Lagos', edad: 29, direccion:"Alamos norte"}
    ];
  }
  cantProfes(){
    return Object.entries(this.profesores).length;
  }
  seleProfes(profe:ProfesorI){ //mejorar, reIngenieria
    this.profesor.nombres = profe.nombres;
    this.profesor.apellidos = profe.apellidos;
    this.profesor.edad = profe.edad;
    this.profesor.direccion = profe.direccion;
  }
  borrarProfesor(profe:ProfesorI){
    for(let i=0;i<this.cantProfes();i++){
      if (this.profesores[i].nombres===profe.nombres)
      {
        this.profesores.splice(i,1);
        return;
      }
    }
  }
  registrarProfesor(){
    for(let x=0; x<this.profesores.length; x++){
      if(this.profesores[x].nombres===this.profesor.nombres){
        alert('El profesor ya esta registrado bola')
        return;
      }
    }
    this.profesores.push({
      nombres: this.profesor.nombres,
      apellidos: this.profesor.apellidos,
      edad: this.profesor.edad,
      direccion: this.profesor.direccion
    });
  }
  modificarProfesor() {
    for (let x = 0; x < this.profesores.length; x++) {
      if (this.profesores[x].nombres = this.profesor.nombres) {
        this.profesores[x].apellidos = this.profesor.apellidos;
        this.profesores[x].edad = this.profesor.edad;
        this.profesores[x].direccion = this.profesor.direccion;
        return;
      }
    }
    alert('El profesor no está registrado');
  }


}
