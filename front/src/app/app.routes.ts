import { Routes } from '@angular/router';
import { BarraNavegacionComponent } from './component/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ClientesComponent } from './component/clientes/clientes.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
{path: 'servicios/:nombre', component: ServiciosComponent},
{path: 'clientes', component: ClientesComponent},

];
