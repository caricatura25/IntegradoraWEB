import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-inter-temperatura',
  templateUrl: './inter-temperatura.component.html',
  styleUrls: ['./inter-temperatura.component.css']
})
export class InterTemperaturaComponent implements OnInit {
  
  public sensores:Array<Temperatura>
  constructor(private Temp: ServiciosService,public router: Router,public cookies:CookieService) { }

  ngOnInit(): void {
    this.checkToken()
    console.log("oninit")
    this.TEMPERATURA()
  }
  
  TEMPERATURA(){
    console.log("realizabdo peticion")
    this.Temp.temperatura().subscribe(data => {
      console.log("hecho")
      this.sensores = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores Temperatura")
      console.log(error)
    });
  }


  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.Temp.check().subscribe(data => {
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
