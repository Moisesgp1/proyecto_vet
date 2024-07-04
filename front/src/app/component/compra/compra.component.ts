import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [RouterLink],
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
    let data:any =localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
  }


  dispararAlerta(){
    Swal.fire({
      title: '¡Hola!',
      text: 'Esta es una alerta de SweetAlert2 en TypeScript.',
      icon: 'success',
      confirmButtonText: 'Ok'
  });
  }

}


