import { Component } from '@angular/core';
import { NoticiaComponent } from '../../components/noticia/noticia.component';
import { Noticia } from '../../clases/noticia';
import { NoticiasService } from '../../services/noticias.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-main',
  imports: [NoticiaComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

  public noticias: Noticia[] = [];
  //CRUD: Create, Read, Update, Delete
  constructor(
    public noticiasService: NoticiasService,
    public usuarioService: UsuariosService,

  ) {
    this.noticiasService.getAll().subscribe((data: any) => {
      this.noticias = data.posts.map((noticia: any) =>{
        console.log("Noticia:", noticia);
        this.usuarioService.getId(noticia.userId).subscribe((data: any) => {
          console.log("Usuario:", data);
        });
        return new Noticia(noticia)

      }     
    );
    });
    /*
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data => {
    });*/
    /*
    this.noticias = [
      {
        titulo: 'Noticia 1',
        descripcion: 'Descripción de la noticia 1',
        fecha: '2021-07-01',
        imagen: 'https://picsum.photos/300/151',
        autor: 'Autor 1'
      },
      {
        titulo: 'Noticia 2',
        descripcion: 'Descripción de la noticia 2',
        fecha: '2021-07-02',
        imagen: 'https://picsum.photos/300/152',
        autor: 'Autor 2'
      },
      {
        titulo: 'Noticia 3',
        descripcion: 'Descripción de la noticia 3',
        fecha: '2021-07-03',
        imagen: 'https://picsum.photos/300/150',
        autor: 'Autor 3'
      }
    ];*/

  }

}
