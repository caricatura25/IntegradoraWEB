import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  ngOnInit(): void {
    this.checkToken()
  }

  cerrarSesion(){
    console.log("Cerrando Sesion...")

    this.cookies.delete("token")
    environment.invited=false

    console.log("Token eliminado")
    this.router.navigateByUrl('/login');
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
