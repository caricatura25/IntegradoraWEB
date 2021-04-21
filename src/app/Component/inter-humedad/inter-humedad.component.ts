import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Humedad } from 'src/app/Interfaces/humedad';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';
import Ws from '@adonisjs/websocket-client';


@Component({
  selector: 'app-inter-humedad',
  templateUrl: './inter-humedad.component.html',
  styleUrls: ['./inter-humedad.component.css']
})
export class InterHumedadComponent implements OnInit {
  public invited:Boolean =  environment.invited;
  public sensores:Array<Humedad>
  public datos:Array<Dato>

  ws: any;
  chat: any;
  humedad: string;
  constructor(private Hum: ServiciosService,private cookies: CookieService,public router: Router) { }

  ngOnInit(): void {
  this.checkToken()
  this.peticiondatos()
  console.log("oninit")
  this.HUMEDAD()
  //this.huemdadSocket()
  }

  HUMEDAD(){
    console.log("realizabdo peticion")
    this.Hum.humedad().subscribe(data => {
      console.log("hecho")
      this.sensores = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }

  huemdadSocket(){
    //this.ws = Ws(environment.apisocket); //ruta de mi web socket

    /* this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wshum") //subscribo al canal

    this.chat.on("message", (data:any) =>{//recibir mesnajes que estan mandado otros clientes
      this.humedad = data
    }) */
  } 
  
  peticiondatos(){
    console.log("realizabdo peticion")
    const request = {dispositivo_id: 7}
    this.Hum.datos(request).subscribe(data => {
      console.log("hecho")
      this.datos = data.registros
      console.log(data)
    }, error =>{
      console.log("Error peticion datos Temperatura")
      console.log(error)
    });
  }


  
  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.Hum.check().subscribe(data => {
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
