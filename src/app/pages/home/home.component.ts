import { Component } from '@angular/core';
import { CabeceraComponent } from '../../bloque/cabecera/cabecera.component';
import { MainComponent } from '../../bloque/main/main.component';
import { AsideComponent } from '../../bloque/aside/aside.component';

@Component({
  selector: 'app-home',
  imports: [CabeceraComponent, MainComponent, AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
