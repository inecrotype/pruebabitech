import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(

    private http:HttpClient

  ) { }

  getAll(){
return this.http.get('http://localhost:8080/api/productos');  

  }

  create(producto: any){
    return this.http.post('http://localhost:8080/api/productos',producto);

  }

  update(href:string, producto:any){
    return this.http.patch(href,producto);

  }

  delete(href:string){
    return this.http.delete(href);


  }
}
