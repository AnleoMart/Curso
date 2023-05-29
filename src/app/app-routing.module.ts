import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path:'profesores',
    component: ProfesorComponent,
  },
  {
    path: 'cursos',
    component: FormularioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
