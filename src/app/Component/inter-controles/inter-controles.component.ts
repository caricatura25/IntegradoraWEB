import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Foco } from 'src/app/Interfaces/foco';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-controles',
  templateUrl: './inter-controles.component.html',
  styleUrls: ['./inter-controles.component.css']
})
export class InterControlesComponent implements OnInit {
  public invited:Boolean =  environment.invited;
  constructor(private api: ServiciosService,private cookies: CookieService,public router: Router) { }

  ngOnInit(): void {
    this.checkToken()
    this.focospeticion()
  }

  public focos:Array<Foco>


  focospeticion(){
    console.log("realizabdo peticion")
    this.api.focos().subscribe(data => {
      console.log("hecho")
      this.focos = data
      console.log(data)
    }, error =>{
      console.log("Error peticion focos")
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
