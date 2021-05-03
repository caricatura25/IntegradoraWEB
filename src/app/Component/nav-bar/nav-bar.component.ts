import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public invited:Boolean =  environment.invited;
  public name:String =  environment.name;
  
  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService,private check: CheckTokenService) { }

  ngOnInit(): void {
    this.check.checkToken()
    //this.checkToken()
  }

  cerrarSesion(){
    console.log("Cerrando Sesion...")

    this.cookies.delete("token")
    environment.name=null

    this.router.navigateByUrl('/login');
  }

  /* checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.api.check().subscribe(data => {
        if(data.status){
          environment.name = data.user.nombre
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
    
  } */

}
