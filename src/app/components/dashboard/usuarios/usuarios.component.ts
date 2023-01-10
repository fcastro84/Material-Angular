import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { User } from "../../interfaces/usuario.interface";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit {

  listUsuarios: User[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private usuarioService: UsuarioService, private _snackBar: MatSnackBar){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarUsuario();

  }

  cargarUsuario(){
    this.listUsuarios = this.usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }


  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<User> ;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario( i: number ){
    this.usuarioService.eliminarUsuario(i);
    this.cargarUsuario();
    this.info();
  }

  info(){
    this._snackBar.open('Usuario eliminado con éxito', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500
    });
  }

}
