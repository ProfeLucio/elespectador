import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
 public menu = [
  "Últimas Noticias",
  "Opinión",
  "Política",
  "Judicial",
  "Economía",
  "Mundo",
  "Bogotá",
  "Deportes",
  "Colombia + 20",
  "Cromos",
  "Vea"
 ]
}
