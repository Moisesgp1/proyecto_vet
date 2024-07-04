import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.css'
})
export class AccesoriosComponent {
  dataProductos:any
  dataCarritoLS:any = []

  constructor(private _apiServicio: ApiService){}

  ngOnInit():void{
    this.obtenerProductos()
    if(localStorage.getItem("carrito") != null){
      let data:any = localStorage.getItem("carrito")
      this.dataCarritoLS = JSON.parse(data)
    }
  }

  obtenerProductos(){
    this._apiServicio.getProductos().subscribe((data:any) => {
      this.dataProductos = data
      console.log(this.dataProductos);

    })
  }


  agregarProductoCarrito(producto:any){
    this.dataCarritoLS.push(producto)
    localStorage.setItem("carrito", JSON.stringify(this.dataCarritoLS))
  }
}
