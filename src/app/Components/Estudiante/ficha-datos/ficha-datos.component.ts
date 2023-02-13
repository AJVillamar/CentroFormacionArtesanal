import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-ficha-datos',
  templateUrl: './ficha-datos.component.html',
  styleUrls: ['./ficha-datos.component.css']
})
export class FichaDatosComponent {

  ingresarDatos: FormGroup
  public isRegistered: boolean = false;

  constructor(private dialogRef: MatDialogRef<FichaDatosComponent>, private fb: FormBuilder) {
    this.ingresarDatos = new FormGroup({
      cedula: new FormControl('', Validators.required),
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      correoelectr: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      niveledu: new FormControl('',Validators.required) 

    })
  }
  onSubmit() {
    if (this.ingresarDatos.invalid) {
      return;
    }
    this.isRegistered = true;
    setTimeout(() => {
      this.isRegistered = false;
    }, 3000)
    console.log(this.ingresarDatos.value)
  }

  cancelar() {
    this.dialogRef.close();
  }
}
