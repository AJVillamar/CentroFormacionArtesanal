import { Component } from '@angular/core';
import { FichaDatosComponent } from '../ficha-datos/ficha-datos.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.component.html',
  styleUrls: ['./inicio-estudiante.component.css']
})
export class InicioEstudianteComponent {

  constructor(private router: Router, private dialog: MatDialog
    ) {
    }

  openDialogFichaDatos() {
    this.dialog.open(FichaDatosComponent, {
      width: '75%'
    })
  }

}
