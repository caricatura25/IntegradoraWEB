import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dispositivo } from 'src/app/Interfaces/dispositivo';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inter-cochera',
  templateUrl: './inter-cochera.component.html',
  styleUrls: ['./inter-cochera.component.css']
})
export class InterCocheraComponent implements OnInit {

  public cocheras:Array<Dispositivo>

  constructor(private check: CheckTokenService,private api: ServiciosService,public router: Router) { }

  ngOnInit(): void {
    this.check.checkToken()
  }

  getCocheras(){
    console.log("realizando peticion cocheras")
    const request = {raspberry_id: environment.raspberry_id, tipo: "Cochera"}
    this.api.getDispositivosTipo(request).subscribe(data => {
      console.log("Realizado peticion cochera")
      this.cocheras = data
      console.log(data)
    }, error =>{
      console.log("Error peticion cochera")
      console.log(error)
    });
  }

}
