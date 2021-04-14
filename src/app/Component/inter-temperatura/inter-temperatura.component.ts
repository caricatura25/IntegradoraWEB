import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';


@Component({
  selector: 'app-inter-temperatura',
  templateUrl: './inter-temperatura.component.html',
  styleUrls: ['./inter-temperatura.component.css']
})
export class InterTemperaturaComponent implements OnInit {
  public invited:Boolean = environment.invited;
  public datos:Array<Dato>
  constructor(private api: ServiciosService,public router: Router,public cookies:CookieService) { }

  ngOnInit(): void {
    this.checkToken()
    console.log("oninit")
    this.peticiondatos()
  }
  
  peticiondatos(){
    console.log("realizabdo peticion")
    const request = {dispositivo_id: 4}
    this.api.datos(request).subscribe(data => {
      console.log("hecho")
      this.datos = data.registros
      console.log(data)
    }, error =>{
      console.log("Error peticion datos Temperatura")
      console.log(error)
    });
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
