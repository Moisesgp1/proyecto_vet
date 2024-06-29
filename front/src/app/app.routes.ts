import { Routes } from '@angular/router';
import { BarraNavegacionComponent } from './component/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServiciosComponent } from './component/servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent},
{path: 'servicios', component: ServiciosComponent}

];
