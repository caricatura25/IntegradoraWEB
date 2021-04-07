import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminnavComponent } from './Component/adminnav/adminnav.component';
import { CarruselComponent } from './Component/carrusel/carrusel.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { NavBarComponent} from './Component/nav-bar/nav-bar.component';
import { Error404Component } from './Component/error404/error404.component'
import { seg2 } from './seg2.guard';
import { CardTempComponent } from './Component/card-temp/card-temp.component';
import { CardHumedadComponent } from './Component/card-humedad/card-humedad.component';
import { LoginComponent } from './Component/login/login.component';
import { MenuComponent } from './Component/menu/menu.component';
import { CocheraComponent } from './Component/cochera/cochera.component';
import { AlarmaComponent } from './Component/alarma/alarma.component';
import { ControlesComponent } from './Component/controles/controles.component';
import { RegInvitadoComponent } from './Component/reg-invitado/reg-invitado.component';
import { SplashComponent } from './Component/splash/splash.component';
import { TabInviComponent } from './Component/tab-invi/tab-invi.component';
import { DispositivosComponent } from './Component/dispositivos/dispositivos.component';
import { InterHumedadComponent } from './Component/inter-humedad/inter-humedad.component';
//import { seg2 } from './seg2.guard';


const routes: Routes = [
  
    {path:'navbar', component:NavBarComponent},
    {path:'splash',component:SplashComponent},
    {path:'carrusel', component:CarruselComponent},
    {path:'navadmin', component:AdminnavComponent},
    {path:'login', component:LoginComponent},
    {path:'Temp',component:CardTempComponent},
    {path:'registro', component:RegistroComponent},
    {path:'Humedad',component:InterHumedadComponent},
    {path:'menu', component:MenuComponent},
    {path:'cochera', component:CocheraComponent},
    {path:'alarma', component:AlarmaComponent},
    {path:'luz',component:ControlesComponent},
    {path:'registro/invitado',component:RegInvitadoComponent},
    {path:'invitados',component:TabInviComponent},
    {path:'dispositivos',component:DispositivosComponent},
    {path:'**',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
