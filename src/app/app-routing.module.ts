import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaDatosComponent } from './Components/Estudiante/ficha-datos/ficha-datos.component';
import { InicioPageComponent } from './Layouts/inicio-page/inicio-page.component';

const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'fichaDatos', component: FichaDatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
