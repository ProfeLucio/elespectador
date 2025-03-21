import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http: HttpClient)  { }

  getId(id: number){
    return this.http.get('https://dummyjson.com/users/'+id);
  }
  getAll(){
    return this.http.get('https://dummyjson.com/users');
  }
  create(){}
  update(){}
  delete(){}
}
