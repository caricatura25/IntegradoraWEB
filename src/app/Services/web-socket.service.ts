import { Injectable } from '@angular/core';
import Ws from '@adonisjs/websocket-client';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  ws: any
  chat:any

  constructor() { }

  connect_ws(data){
    this.ws = Ws(environment.wsURL); //ruta de mi web socket
  
    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe(data.channel) //subscribo al canal
    console.log("Socket conectado")
  } 


  /* abrir(){
    console.log("Abriendo Cochera")
    const data = {estado:1,pin: this.cochera.pin}
    this.chat.emit("message", data);
  }

  cerrar(){
    console.log("Cerrando Cochera")
    const data = {estado:0,pin: this.cochera.pin}
    this.chat.emit("message", data);
  } */
}
