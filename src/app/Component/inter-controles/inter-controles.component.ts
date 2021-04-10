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
