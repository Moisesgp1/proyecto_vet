import { Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { AccesoriosComponent } from './component/accesorios/accesorios.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { CompraComponent } from './component/compra/compra.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path:'compra', component: CompraComponent },
  { path: 'inicio', component: InicioComponent},
  {path: 'servicios/:nombre', component: ServiciosComponent},
]



