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
  
  constructor(private check: CheckTokenService,private api: ServiciosService,private cookies: CookieService,public router: Router) { }

  ngOnInit(): void {
    this.check.checkToken()
    this.focospeticion()
  }

  public focos:Array<Foco>


  focospeticion(){
    console.log("realizando peticion")
    const request = {raspberry_id: environment.raspberry_id, tipo: "Foco"}
    this.api.getDispositivosTipo(request).subscribe(data => {
      console.log("Realizado peticion focos")
      this.focos = data
      console.log(data)
    }, error =>{
      console.log("Error peticion focos")
      console.log(error)
    });
  }

  

  

}
