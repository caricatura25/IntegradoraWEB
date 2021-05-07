import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ServiciosService } from 'src/app/servicios.service';
import { Router } from '@angular/router';
import { InterTemperaturaComponent } from '../inter-temperatura/inter-temperatura.component';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';
import Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-card-temp',
  templateUrl: './card-temp.component.html',
  styleUrls: ['./card-temp.component.css']
})
export class CardTempComponent implements OnInit {
  @Input() sensores:Temperatura

  constructor(private api: ServiciosService, private interTemp: InterTemperaturaComponent) {
  }

  ngOnInit(): void {
  }
  peticionsensor(){ //Peticion para obtener la informacion del sensor de temperatura
    console.log("realizabdo peticion sensor")
    const request = {'dispositivo_id': 1}
    this.api.temperatura(request).subscribe(data => {
      console.log("hecho sensor de temperatura")
    }, error =>{
      console.log("Error peticion sensor Temperatura")
      console.log(error)
    });
  }

  /* connect_ws(){
    this.ws = Ws(environment.wsURL); //ruta de mi web socket

    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wstemp") //subscribo al canal
    this.temperaturaSocket()
  }

  temperaturaSocket(){
    this.chat.emit("message", this.sensor); //Envio la informacion del sensor que quiero monitoriar1

    this.chat.on("message", (data:any) =>{//recibir mesnajes que estan mandado otros clientes
    
      this.tempActual = data
    }) 
  }      */
  /* peticiondatos(){ //Peticion para mostrar los ultimos 5 datos
    console.log("realizado peticion")
    const request = {dispositivo_id: this.sensor.dispositivo_id, limit: 7}
    this.api.datos(request).subscribe(data => {
      console.log("hecho")
      
      console.log(data)
      
    }, error =>{
      console.log("Error peticion datos Temperatura")
      console.log(error)
    }); */

  /* eliminarTemperatura(sensor){
    const request = {dispositivo_id: sensor.dispositivo_id}
    console.log(request)
    this.api.deletedevice(request).subscribe(data => {
      console.log("hecho delete/device")
      this.interTemp.TEMPERATURA()
      console.log(data)
    }, error =>{
      console.log("Eliminar Temperatura error")
      console.log(error)
    }); 
  } */
}


