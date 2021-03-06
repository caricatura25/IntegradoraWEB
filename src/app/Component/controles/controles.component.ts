import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';
import { Foco } from 'src/app/Interfaces/foco';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';
import Ws from '@adonisjs/websocket-client';
import { InterControlesComponent } from '../inter-controles/inter-controles.component';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit,OnDestroy {
  @Input() focos:Foco
  public encen: Boolean = false
  public apaga: Boolean = true
  public usuario:Boolean
  
  ws: any;
  chat: any;
  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  ngOnInit(): void {
    this.usuario = environment.usuario
  }


  connect_ws(){
    this.ws = Ws(environment.wsURL); //ruta de mi web socket
  
    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wsfoco") //subscribo al canal
    console.log("Websocket conectado a focos")
  }
  
  encender(){
    this.apaga =false
    this.encen = true
    console.log("Id de foco")
    console.log(this.focos.dispositivo_id)
    if(this.focos.dispositivo_id != 7){
      const data = {estado: 0, pin: this.focos.pin,in:1}
      this.chat.emit("message", data); //Envio la informacion del foco
    }else{
      //console.log("foco externo")
      const data = {estado: 0, pin: this.focos.pin,in:2}
      this.chat.emit("message", data); //Envio la informacion del foco
    }

  }

  apagar(){
    this.encen = false
    this.apaga = true
    if(this.focos.dispositivo_id != 7){
      const data = {estado: 1, pin: this.focos.pin,in:1}
      this.chat.emit("message", data); //Envio la informacion del foco
    }else{
      console.log("foco externo")
      const data = {estado: 1, pin: this.focos.pin,in:2}
      this.chat.emit("message", data); //Envio la informacion del foco
    }
  }

  eliminar(){
    
    const request = {dispositivo_id: this.focos.dispositivo_id,in:1}
    console.log(request)
    this.api.deletedevice(request).subscribe(data => {
      console.log("hecho delete/device")
      console.log(data)
    }, error =>{
      console.log("Eliminar foco error")
      console.log(error)
    }); 
  }
  

  ngOnDestroy(){
    this.ws.close()
  }
}
