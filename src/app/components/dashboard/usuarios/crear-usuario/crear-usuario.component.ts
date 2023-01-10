import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { User } from 'src/app/components/interfaces/usuario.interface';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  sexos: string[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor( private usuariosService: UsuarioService, private fb: FormBuilder, private _snackBar: MatSnackBar, private route: Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  crear(){

    const user: User = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellidos,
      sexo: this.form.value.sexo
    };
    this.usuariosService.insertarUsuario(user);
    this.info();
    this.route.navigate(['/dashboard/usuarios']);

  }

  info(){
    this._snackBar.open('Usuario insertado con éxito', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500
    });
  }

}
