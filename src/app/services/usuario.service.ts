import { Injectable } from '@angular/core';
import { User } from '../components/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: User[] = [
    {usuario: 'hperez', nombre: 'Hydrogen1', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen3', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen5', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'hperez', nombre: 'Hydrogen', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen6', apellido: 'Perez', sexo: 'Femenino'},
    {usuario: 'hperez', nombre: 'Hydrogen', apellido: 'Perez', sexo: 'Femenino'},
  ];


  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario( index: number){
    this.listUsuarios.splice(index, 1);
  }

  insertarUsuario(usuario: User){
    this.listUsuarios.push(usuario);
  }
}
