import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  productos: any[] = [];
  formulario :FormGroup = this.form.group({
    nombre:[],
    descripcion:[],
    stock:[],
    precio:[]})

    productoEdit:any;

  constructor(private productoService:ProductoService, private form: FormBuilder
    
    ) { }

    getAll(){
      this.productoService.getAll()
      .subscribe((productos : any)=>{
        console.log('productos',productos)
        this.productos = productos._embedded.productos;
  
      })
    }

  ngOnInit(): void {
    this.getAll()
  }


  save(){
const values = this.formulario.value;

console.log('values', values);

if(this.productoEdit){
  this.productoService.update(this.productoEdit._links.self.href, values)
.subscribe(()=>{
  this.getAll();
  this.productoEdit =null;
  this.formulario.setValue({
    nombre:'',
    descripcion:'',
    stock:'',
    precio:''

  })
}) 

}
else{

  this.productoService.create(values)
.subscribe(()=>{
  this.getAll();
  this.formulario.setValue({
    nombre:'',
    descripcion:'',
    stock:'',
    precio:''

  })
}) 

}

  }


  edit(producto:any){

    this.productoEdit =producto;
    this.formulario.setValue({
      nombre:producto.nombre,
      descripcion:producto.descripcion,
      stock:producto.stock,
      precio:producto.precio
  
    })



  }


  delete(producto:any){

    console.log(this.productos)
    const ok = confirm('¿Estás seguro de eliminar este producto?');
    if(ok){
    this.productoService.delete(producto._links.self.href)
    .subscribe(()=>{
    this.getAll();
    });
  }
  }

}
