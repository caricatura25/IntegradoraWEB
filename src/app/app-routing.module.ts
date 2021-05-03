/* MODULOS */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* COMPONENTES */
import { RegistroComponent } from './Component/registro/registro.component';
import { NavBarComponent} from './Component/nav-bar/nav-bar.component';
import { Error404Component } from './Component/error404/error404.component'
import { LoginComponent } from './Component/login/login.component';
import { MenuComponent } from './Component/menu/menu.component';
import { CocheraComponent } from './Component/cochera/cochera.component';
import { AlarmaComponent } from './Component/alarma/alarma.component';
import { ControlesComponent } from './Component/controles/controles.component';

import { DispositivosComponent } from './Component/dispositivos/dispositivos.component';
import { InterHumedadComponent } from './Component/inter-humedad/inter-humedad.component';
import { InterControlesComponent } from './Component/inter-controles/inter-controles.component';
import { InterTemperaturaComponent } from './Component/inter-temperatura/inter-temperatura.component';
import { MenuRComponent } from './Component/menu-r/menu-r.component';
import { RegistrorasComponent } from './Component/registroras/registroras.component';
import { RasexisComponent } from './Component/rasexis/rasexis.component';



const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'raspberry',component:MenuRComponent},
    {path:'raspberry/dispositivos',component:MenuComponent},
    {path:'raspberry/dispositivos/temperatura',component:InterTemperaturaComponent},
    {path:'raspberry/dispositivos/controles',component:InterControlesComponent},
    {path:'raspberry/dispositivos/humedad',component:InterHumedadComponent},
    {path:'raspberry/dispositivos/cochera', component:CocheraComponent},
    {path:'raspberry/dispositivos/alarma', component:AlarmaComponent},
    {path:'agregar/dispositivo',component:DispositivosComponent},
    {path:'agregar/raspberry',component:RegistrorasComponent},
    {path:'agregar/raspberry/existente',component:RasexisComponent},
    {path:'**',component:Error404Component}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
