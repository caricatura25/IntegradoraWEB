import { Component, NgModule } from '@angular/core';
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
import { VTempComponent } from './Component/v-temp/v-temp.component';

import { DispositivosComponent } from './Component/dispositivos/dispositivos.component';
import { InterHumedadComponent } from './Component/inter-humedad/inter-humedad.component';
import { InterControlesComponent } from './Component/inter-controles/inter-controles.component';
import { InterTemperaturaComponent } from './Component/inter-temperatura/inter-temperatura.component';
import { InterMenuRComponent } from './Component/inter-menu-r/inter-menu-r.component';
import { RegistrorasComponent } from './Component/registroras/registroras.component';
import { RasexisComponent} from './Component/rasexis/rasexis.component';
import { RegInvitadoComponent } from './Component/reg-invitado/reg-invitado.component';
import { InterInvitadosComponent } from './Component/inter-invitados/inter-invitados.component';
import { VHumedadComponent } from './Component/v-humedad/v-humedad.component';
import { InterCocheraComponent } from './Component/inter-cochera/inter-cochera.component';





const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'raspberry',component:InterMenuRComponent},
    {path:'raspberry/dispositivos',component:MenuComponent},
    {path:'raspberry/dispositivos/temperatura',component:InterTemperaturaComponent},
    {path:'raspberry/dispositivos/controles',component:InterControlesComponent},
    {path:'raspberry/dispositivos/humedad',component:InterHumedadComponent},
    {path:'raspberry/dispositivos/cochera', component:InterCocheraComponent},
    {path:'raspberry/dispositivos/alarma', component:AlarmaComponent},
    {path:'agregar/dispositivo',component:DispositivosComponent},
    {path:'agregar/usuario',component:RegInvitadoComponent},
    {path:'usuarios',component:InterInvitadosComponent},
    {path:'agregar/raspberry',component:RegistrorasComponent},
    {path:'agregar/raspberry/existente',component:RasexisComponent},
    {path:'raspberry/dispositivos/temperatura/vtemp', component:VTempComponent},
    {path:'raspberry/dispositivos/humedad/vhumedad', component:VHumedadComponent},
    {path:'**',component:Error404Component}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
