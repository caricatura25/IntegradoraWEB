import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Humedad } from 'src/app/Interfaces/humedad';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-inter-humedad',
  templateUrl: './inter-humedad.component.html',
  styleUrls: ['./inter-humedad.component.css']
})
export class InterHumedadComponent implements OnInit {

  public sensores:Array<Humedad>
  constructor(private Hum: ServiciosService,private cookies: CookieService,public router: Router) { }

  ngOnInit(): void {
  this.checkToken()
  console.log("oninit")
  this.HUMEDAD()
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

  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.Hum.check().subscribe(data => {
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
