import { Component, Input } from '@angular/core';
import { Noticia } from '../../clases/noticia';

@Component({
  selector: 'app-noticia',
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.sass'
})
export class NoticiaComponent {
  @Input() noticia!: Noticia;
}
