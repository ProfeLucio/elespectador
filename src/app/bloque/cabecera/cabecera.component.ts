import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-cabecera',
  imports: [NavbarComponent, MenuComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.sass'
})
export class CabeceraComponent {

}
