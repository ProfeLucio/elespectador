import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http: HttpClient) {
    
  }

  getId(){
  }
  getAll(){
    return this.http.get('https://dummyjson.com/posts');
  }
  create(){}
  update(){}
  delete(){}
}
