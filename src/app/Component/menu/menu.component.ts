import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {
  public invited:Boolean =  environment.invited;
  public Temp_Hum: Boolean = false
  public Foco: Boolean = false
  public Cochera: Boolean = false
  

  constructor(public router: Router,private api: ServiciosService,private check: CheckTokenService) { }
  
  ngOnInit(): void {
    this.check.checkToken()
    this.getDispositivos()
  }

  getDispositivos(){ 
    environment.menu_dispositivo = true
    console.log("Realizado peticion dispositivos")
    const request = {raspberry_id:environment.raspberry_id}
    this.api.getDispositivos(request).subscribe(data => {
      console.log(data)
      console.log(request)
      for (let i = 0; i < data.length; i++) {
        if(data[i].tipo == "Temperatura_Humedad" || data[i].tipo == "Temperatura" || data[i].tipo == "Humedad"){
          this.Temp_Hum = true
        }else if(data[i].tipo == "Foco"){
          this.Foco = true
        }else if(data[i].tipo == "Cochera"){
          this.Cochera = true
        }
      }

    }, error =>{
      console.log("Error peticion dispositivos")
      console.log(error)
    });
  }

  ngOnDestroy(): void {
    environment.menu_dispositivo = false

    this.Cochera = false
    this.Foco = false
    this.Temp_Hum = false
  }


}
