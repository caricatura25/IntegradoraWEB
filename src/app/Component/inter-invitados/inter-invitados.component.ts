import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Invitado } from 'src/app/Interfaces/invitado';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-invitados',
  templateUrl: './inter-invitados.component.html',
  styleUrls: ['./inter-invitados.component.css']
})
export class InterInvitadosComponent implements OnInit {
  public invited:Boolean =  environment.invited;
  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService,private check: CheckTokenService) { }
  
  public invi_pendien:Array<Invitado>
  public misinvitados:Array<Invitado>
  

  ngOnInit(): void {
    this.check.checkToken()

    this.invi_pendientes()
    this.invitados()
  }

  invi_pendientes(){
    console.log("realizando peticion pending/invited")
    this.api.pending_invited().subscribe(data => {
      console.log("hecho pending/invited")
      this.invi_pendien = data
      console.log(data)
    }, error =>{
      console.log("Error peticion pending/invited")
      console.log(error)
    });
  }

  invitados(){
    console.log("realizando peticion /invited")
    this.api.invited().subscribe(data => {
      console.log("hecho /invited")
      this.misinvitados = data
      console.log(data)
    }, error =>{
      console.log("Error peticion /invited")
      console.log(error)
    });
  }

  aceptarInvitado(invitado){
    console.log("Aceptando invitado...")
    const request = {invitado_id: invitado.invitado_id}
    console.log(request)
    this.api.acceptinvited(request).subscribe(data => {
      console.log("hecho request/invited")
      console.log(data)
      
      this.invitados()
      this.invi_pendientes() 
    }, error =>{
      console.log("Error peticion request/invited")
      console.log(error)
    });

    
    
  }

  eliminarInvitado(invitado){
    console.log("Eliminando invitado...")
    const request = {nombre: invitado.nombre}
    console.log(request)
    this.api.deleteinvited(request).subscribe(data => {
      console.log("hecho delete/invited")
      console.log(data)
    }, error =>{
      console.log("Error peticion delete/invited")
      console.log(error)
    });

    this.invitados() 
    this.invi_pendientes()
  }


}
