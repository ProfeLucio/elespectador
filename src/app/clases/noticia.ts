export class Noticia {
    id: number = 0;
    body: string = '';
    views: number = 0;
    userId: number = 0;
    title: string = '';
    tags: string[]  = [];

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
        this.tags = data.tags;
        console.log("Tag: ", this.tags);
    }

    generateImage() {
        let rand = Math.random()*this.tags.length;
        rand = Math.round(rand);
        return 'https://picsum.photos/300/150/';
       // return 'https://picsum.photos/300/150/'+this.tags[rand];
    }

}
