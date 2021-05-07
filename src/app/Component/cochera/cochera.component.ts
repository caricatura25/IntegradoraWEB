import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';
import Ws from '@adonisjs/websocket-client';
import { Cochera } from 'src/app/Interfaces/cochera';
import { CheckTokenService } from 'src/app/Services/check-token.service';

@Component({
  selector: 'app-cochera',
  templateUrl: './cochera.component.html',
  styleUrls: ['./cochera.component.css']
})
export class CocheraComponent implements OnInit, OnDestroy {
  
  public cochera:Cochera
  ws: any;
  chat: any;
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

  peticionsensor(){ //Peticion para obtener la informacion del sensor de temperatura
    console.log("realizabdo peticion dispositivo")
    const request = {'dispositivo_id': 5}
    this.api.temperatura(request).subscribe(data => {
      console.log("hecho cochera")
      this.cochera = data
      this.connect_ws()
      console.log(data)
    }, error =>{
      console.log("Error peticion cochera")
      console.log(error)
    });
  }

  abrir(){
    console.log("Abriendo Cochera")
    const data = {estado:1,pin: this.cochera.pin}
    this.chat.emit("message", data);
  }

  cerrar(){
    console.log("Cerrando Cochera")
    const data = {estado:0,pin: this.cochera.pin}
    this.chat.emit("message", data);
  }


  ngOnDestroy(){
    this.ws.close()
  }
}


