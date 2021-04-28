import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';
import { Foco } from 'src/app/Interfaces/foco';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';
import Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit,OnDestroy {
  @Input() focos:Foco
  public invited:Boolean =  environment.invited;
  ws: any;
  chat: any;
  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  ngOnInit(): void {
    this.checkToken()
  }

  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.api.check().subscribe(data => {
        if(data.status){ 
            console.log("Autorizado User")
            this.connect_ws()
        }else if(environment.invited){
            console.log("Autorizado Invitado")
            this.connect_ws()
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

  connect_ws(){
    this.ws = Ws(environment.wsURL); //ruta de mi web socket
  
    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wsfoco") //subscribo al canal
    console.log("Websocket conectado a focos!!")
  }
  
  encender(){
    console.log("Id de foco")
    console.log(this.focos.dispositivo_id)
    
    const data = {estado: 1, pin: this.focos.pin}
    this.chat.emit("message", data); //Envio la informacion del foco
  }

  apagar(){
    const data = {estado: 0, pin: this.focos.pin}
    this.chat.emit("message", data); //Envio la informacion del foco
  }

  eliminar(){
    
  }

  ngOnDestroy(){
    console.log("Saliendo del componente")
    this.ws.close()
  }
}
