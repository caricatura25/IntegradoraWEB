import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';
//import Ws from '@adonisjs/websocket-client';


@Component({
  selector: 'app-inter-temperatura',
  templateUrl: './inter-temperatura.component.html',
  styleUrls: ['./inter-temperatura.component.css']
})
export class InterTemperaturaComponent implements OnInit {
  public invited:Boolean = environment.invited;
  public datos:Array<Dato>
  public sensor:Temperatura

  ws: any;
  chat: any;

  temperatura: string;

  constructor(private api: ServiciosService, public router: Router, public cookies:CookieService) { }

  ngOnInit(): void {
    this.checkToken()
    console.log("oninit")
    this.peticionsensor()
    //this.temperaturaSocket()
  }

  /* temperaturaSocket(){
    this.ws = Ws("ws://localhost:3333"); //ruta de mi web socket
    this.chat.emit("message", this.sensor);

    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wstemp") //subscribo al canal

    this.chat.on("message", (data:any) =>{//recibir mesnajes que estan mandado otros clientes
      this.temperatura = data
    }) 
  } */  
  
  peticiondatos(){ //PEticion para mostrar los ultimos 5 datos
    console.log("realizado peticion")
    const request = {dispositivo_id: this.sensor.dispositivo_id}
    this.api.datos(request).subscribe(data => {
      console.log("hecho")
      this.datos = data.registros
      console.log(data)
    }, error =>{
      console.log("Error peticion datos Temperatura")
      console.log(error)
    });
  }

  peticionsensor(){ //Peticion para obtener la informacion del sensor 
    console.log("realizabdo peticion sensor")
    this.api.temperatura().subscribe(data => {
      console.log("hecho sensor de temperatura")
      this.sensor = data
      console.log(data)
      this.peticiondatos()
    }, error =>{
      console.log("Error peticion sensor Temperatura")
      console.log(error)
    });
  }

  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.api.check().subscribe(data => {
        if(data.status){
            console.log("Autorizado User")
        }else if(environment.invited){
            console.log("Autorizado Invitado")
        }else{
            console.log("No autorizado")
            environment.invited = false
            this.cookies.delete("token")
            this.router.navigateByUrl('/login');
        }
    }, error =>{
        alert("No se pudo completar el registro")
        console.log("Registro error")
        console.log(error)
    });
    
  }
}
