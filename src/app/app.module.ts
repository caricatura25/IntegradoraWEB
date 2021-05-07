/* MODULOS */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { TokenService } from './Interceptores/token.service';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* COMPONENTES */
import { AppComponent } from './app.component';
import { SplashComponent } from './Component/splash/splash.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { Error404Component } from './Component/error404/error404.component';
import { CardTempComponent } from './Component/card-temp/card-temp.component';
import { CardHumedadComponent } from './Component/card-humedad/card-humedad.component';
import { LoginComponent } from './Component/login/login.component';
import { MenuComponent } from './Component/menu/menu.component';
import { CocheraComponent } from './Component/cochera/cochera.component';
import { AlarmaComponent } from './Component/alarma/alarma.component';
import { ControlesComponent } from './Component/controles/controles.component';
import { RegInvitadoComponent } from './Component/reg-invitado/reg-invitado.component';
import { DispositivosComponent } from './Component/dispositivos/dispositivos.component';
import { InterHumedadComponent } from './Component/inter-humedad/inter-humedad.component';
import { InterTemperaturaComponent } from './Component/inter-temperatura/inter-temperatura.component';
import { InterControlesComponent } from './Component/inter-controles/inter-controles.component';
import { InterInvitadosComponent } from './Component/inter-invitados/inter-invitados.component';
import { MenuRComponent } from './Component/menu-r/menu-r.component';
import {RegistrorasComponent} from  './Component/registroras/registroras.component';
import { RasexisComponent } from './Component/rasexis/rasexis.component';
import { InterMenuRComponent } from './Component/inter-menu-r/inter-menu-r.component';
import { VTempComponent } from './Component/v-temp/v-temp.component';
import { VHumedadComponent } from './Component/v-humedad/v-humedad.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SplashComponent,
    RegistroComponent,
    RegistrorasComponent,
    Error404Component,
    CardTempComponent,
    CardHumedadComponent,
    LoginComponent,
    MenuComponent,
    CocheraComponent,
    AlarmaComponent,
    ControlesComponent,
    RegInvitadoComponent,
    DispositivosComponent,
    InterHumedadComponent,
    InterTemperaturaComponent,
    InterControlesComponent,
    InterInvitadosComponent,
    MenuRComponent,
    RasexisComponent,
    InterMenuRComponent,
    VTempComponent,
    VHumedadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxSpinnerModule

  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
