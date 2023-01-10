import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [];

  constructor( private menuService: MenuService){}

  ngOnInit() {
    this.getMenu();
  }

  getMenu(){
    this.menuService.getMenu()
                    .subscribe( valor => this.menu = valor);
  }


}
