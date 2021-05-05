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
  public nombre:String
  public menu_dispositivo:Boolean

  
  constructor(private cookies: CookieService,public router: Router,private check: CheckTokenService) { }

  ngOnInit(): void {
    this.check.checkToken()
    this.setEnvironment()
  }

  setEnvironment(){
    this.nombre = environment.nombre;
    this.menu_dispositivo =  environment.menu_dispositivo;
  }

  cerrarSesion(){
    console.log("Cerrando Sesion...")

    this.cookies.delete("token")
    environment.nombre = null
    environment.home_id = null

    this.router.navigateByUrl('/login');
  }

}
