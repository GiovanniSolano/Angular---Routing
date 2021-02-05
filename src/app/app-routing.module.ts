import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { RandomGuard } from './guards/random.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'informacion'},
  {path: 'informacion', component: InfoComponent, canActivate: [RandomGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'sobre', redirectTo: 'about'},
  {path: 'empleado/:id', component: EmpleadoComponent, children:[
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'curriculum', component: CurriculumComponent},
    {path: 'experiencia', component: ExperienciaComponent},

  ]},
  {path: '**', redirectTo: 'contacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/* 
*
* localhost:4200/empleado/123/proyectos
* localhost:4200/empleado/125/curriculum
* localhost:4200/empleado/124/experiencia
*
*/