export class Noticia {
    id: number = 0;
    body: string = '';
    views: number = 0;
    userId: number = 0;
    title: string = '';

    titulo: string = '';
    descripcion: string = '';
    fecha: string = '';
    imagen: string = '';
    autor: string = '';

    constructor(data: any) {
        this.id = data.id;
        this.body = data.body;
        this.views = data.views;
        this.userId = data.userId;
        this.title = data.title;
    }

}
