import { CarruselComponent } from './Shared/carrusel/carrusel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioPageComponent } from './Layouts/inicio-page/inicio-page.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InicioDocenteComponent } from './Components/Docente/inicio-docente/inicio-docente.component';
import { InicioEstudianteComponent } from './Components/Estudiante/inicio-estudiante/inicio-estudiante.component';
import { InicioContenidoComponent } from './Layouts/inicio-contenido/inicio-contenido.component';
import { InicioAdministracionComponent } from './Components/Administracion/inicio-administracion/inicio-administracion.component';
<<<<<<< HEAD
import { LoginDocenteComponent } from './Components/Docente/login-docente/login-docente.component';
 
=======
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FichaDatosComponent } from './Components/Estudiante/ficha-datos/ficha-datos.component';
import { MatRadioModule } from '@angular/material/radio';
>>>>>>> e695322e07023a524bb73dd79aaffd4a8e3649d4
@NgModule({
    declarations: [
        AppComponent,
        InicioPageComponent,
        MenuComponent,
        FooterComponent,
        CarruselComponent,
        InicioDocenteComponent,
        InicioEstudianteComponent,
        InicioContenidoComponent,
        InicioAdministracionComponent,
<<<<<<< HEAD
        LoginDocenteComponent
=======
        FichaDatosComponent,
        
>>>>>>> e695322e07023a524bb73dd79aaffd4a8e3649d4
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatDatepickerModule,
        MatRadioModule
    ]
})
export class AppModule { }
