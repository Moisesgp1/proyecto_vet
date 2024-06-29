import { Routes } from '@angular/router';
import { BarraNavegacionComponent } from './component/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
import { AccesoriosComponent } from './component/accesorios/accesorios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent},
  {path: 'accesorios', component: AccesoriosComponent},


];
