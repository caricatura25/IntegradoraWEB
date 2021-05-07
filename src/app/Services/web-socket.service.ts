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

  emit_ws(data){
    this.chat.emit("message", data);
    console.log("Mensaje emitido")
  }


  close_ws(){
    this.ws.close()
  }
}
