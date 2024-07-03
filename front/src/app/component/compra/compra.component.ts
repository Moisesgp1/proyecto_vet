import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

  dataCarrito:any

  ngOnInit():void{
    let data:any = localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
  }

  eliminarCarrito(){
    localStorage.removeItem("carrito")
  }

}
