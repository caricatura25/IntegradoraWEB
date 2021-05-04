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
  public name:String = "";
  
  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService,private check: CheckTokenService, private service: ServiciosService) { }

  public rasp_lenght = 0;

  ngOnInit(): void {
    this.check.checkToken()
    this.getRasp();
    this.checkToken()
  }

  cerrarSesion(){
    console.log("Cerrando Sesion...")

    this.cookies.delete("token")
    environment.name=null

    this.router.navigateByUrl('/login');
  }

  
  getRasp() {  
    // console.log(environment.home_id);
  this.service.getRaspberry({home_id: 1}).subscribe(res => {
      console.log(res);
      this.rasp_lenght = res.length;
  });
}

  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.api.check().subscribe(data => {
      console.log('data',data);
        if(data.status){
          environment.name = data.user.nombre
          this.name = environment.name;
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
