import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Invitado } from 'src/app/Interfaces/invitado';
import { User } from 'src/app/Interfaces/user';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-invitados',
  templateUrl: './inter-invitados.component.html',
  styleUrls: ['./inter-invitados.component.css']
})
export class InterInvitadosComponent implements OnInit {
  
  constructor(public router: Router,private api: ServiciosService,private check: CheckTokenService) { }

  public usuarios:Array<User>
  public usuariosbool:Boolean
  

  ngOnInit(): void {
    this.check.checkToken()
    this.peticionUsuarios()
  }

  peticionUsuarios(){
    console.log("Realizando peticion mostrar usuarios")
    const request = {home: environment.home_id}
    this.api.getUsuarios(request).subscribe(data => {
      this.usuarios = data
      if(this.usuarios.length <= 0){
        this.usuariosbool = false
      }else{
        this.usuariosbool = true
      }
      console.log(data)
    }, error =>{
      console.log("Error peticion usuarios")
      console.log(error)
    });
  }


  eliminarUsuario(usuario){
    console.log("Eliminando usuario...")
    const request = {home: environment.home_id,usuario_id: usuario.usuario_id}
    console.log(request)
    this.api.eliminarUsuario(request).subscribe(data => {
      console.log("Respuesta eliminar usuario")
      console.log(data)
      this.peticionUsuarios()
    }, error =>{
      console.log("Error peticion eliminar usuario")
      console.log(error)
    });
  }


}
