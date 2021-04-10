import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Invitado } from 'src/app/Interfaces/invitado';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-invitados',
  templateUrl: './inter-invitados.component.html',
  styleUrls: ['./inter-invitados.component.css']
})
export class InterInvitadosComponent implements OnInit {

  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  public invi_pendien:Array<Invitado>

  ngOnInit(): void {
    this.checkToken()
    console.log("OnInit")
    this.invi_pendientes()
  }

  invi_pendientes(){
    console.log("realizando peticion")
    this.api.humedad().subscribe(data => {
      console.log("hecho")
      this.invi_pendien = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }

  invitados(){

  }

  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.api.check().subscribe(data => {
        if(data.status && environment.session){
            console.log("token vaido")
        }else{
            console.log("no valido")
            environment.session= false
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
