import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminnavComponent } from './Component/adminnav/adminnav.component';
import { CarruselComponent } from './Component/carrusel/carrusel.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { NavBarComponent} from './Component/nav-bar/nav-bar.component';
import { Error404Component } from './Component/error404/error404.component'

import { CardTempComponent } from './Component/card-temp/card-temp.component';

import { LoginComponent } from './Component/login/login.component';
import { MenuComponent } from './Component/menu/menu.component';
import { CocheraComponent } from './Component/cochera/cochera.component';
import { AlarmaComponent } from './Component/alarma/alarma.component';
import { ControlesComponent } from './Component/controles/controles.component';
import { RegInvitadoComponent } from './Component/reg-invitado/reg-invitado.component';
import { SplashComponent } from './Component/splash/splash.component';

import { DispositivosComponent } from './Component/dispositivos/dispositivos.component';
import { InterHumedadComponent } from './Component/inter-humedad/inter-humedad.component';
import { InterControlesComponent } from './Component/inter-controles/inter-controles.component';
import { InterInvitadosComponent } from './Component/inter-invitados/inter-invitados.component';
import { InterTemperaturaComponent } from './Component/inter-temperatura/inter-temperatura.component';
import {InterMenuR} from './Component/inter-menu-r/inter-menu-r.component';
import { MenuRComponent } from './Component/menu-r/menu-r.component';
import { RegistrorasComponent } from './Component/registroras/registroras.component';
import { from } from 'rxjs';




const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'navbar', component:NavBarComponent},
    {path: 'menuRa',component:MenuRComponent},
    {path:'splash',component:SplashComponent},
    {path:'carrusel', component:CarruselComponent},
    {path:'navadmin', component:AdminnavComponent},
    {path:'login', component:LoginComponent},
    {path:'temperatura',component:InterTemperaturaComponent},
    {path:'controles',component:InterControlesComponent},
    {path:'MenuR',component:InterMenuR},
    {path:'registro', component:RegistroComponent},
    {path:'Humedad',component:InterHumedadComponent},
    {path:'menu', component:MenuComponent},
    {path:'cochera', component:CocheraComponent},
    {path:'alarma', component:AlarmaComponent},
    {path:'luz',component:ControlesComponent},
    {path:'registro/invitado',component:RegInvitadoComponent},
    {path:'invitados',component:InterInvitadosComponent},
    {path:'dispositivos',component:DispositivosComponent},
    {path:'regras',component:RegistrorasComponent},
    {path:'**',component:Error404Component}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
