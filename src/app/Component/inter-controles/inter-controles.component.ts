import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Foco } from 'src/app/Interfaces/foco';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-controles',
  templateUrl: './inter-controles.component.html',
  styleUrls: ['./inter-controles.component.css']
})
export class InterControlesComponent implements OnInit {
  public invited:Boolean =  environment.invited;
  constructor(private check: CheckTokenService,private api: ServiciosService,private cookies: CookieService,public router: Router) { }

  ngOnInit(): void {
    this.check.checkToken()
    this.focospeticion()
  }

  public focos:Array<Foco>


  focospeticion(){
    console.log("realizando peticion")
    this.api.focos().subscribe(data => {
      console.log("hecho")
      this.focos = data
      console.log(data)
    }, error =>{
      console.log("Error peticion focos")
      console.log(error)
    });
  }

  

  

}
