import { CarruselComponent } from './Shared/carrusel/carrusel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioPageComponent } from './Components/inicio-page/inicio-page.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        InicioPageComponent,
        MenuComponent,
        FooterComponent,
        CarruselComponent
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
        FormsModule
    ]
})
export class AppModule { }
