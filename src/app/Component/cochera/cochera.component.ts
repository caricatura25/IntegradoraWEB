import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';
import Ws from '@adonisjs/websocket-client';
import { Cochera } from 'src/app/Interfaces/cochera';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { Dispositivo } from 'src/app/Interfaces/dispositivo';

@Component({
  selector: 'app-cochera',
  templateUrl: './cochera.component.html',
  styleUrls: ['./cochera.component.css']
})
export class CocheraComponent implements OnInit, OnDestroy {
  @Input() cocheras:Dispositivo
  public encen: Boolean = false
  public apaga: Boolean = true
  ws:any
  chat:any
  constructor(private check: CheckTokenService,private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  ngOnInit(): void {
    this.check.checkToken()
  }


   connect_ws(){
    this.ws = Ws(environment.wsURL); //ruta de mi web socket
  
    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wscochera") //subscribo al canal
    console.log("Websocket conectado a cochera!!")
  } 


  abrir(){
    this.apaga =false
    this.encen = true
    console.log("Abriendo Cochera")
    const data = {estado:1,pin: 1}
    this.chat.emit("message", data);
  }

  cerrar(){
    this.apaga =true
    this.encen = false
    console.log("Cerrando Cochera")
    const data = {estado:0,pin: 1}
    this.chat.emit("message", data);
  } 


  ngOnDestroy(){
    //this.ws.close()
  }
}


