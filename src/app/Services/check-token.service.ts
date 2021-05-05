import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';
import { ServiciosService } from '../servicios.service';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenService {
  constructor(private api: ServiciosService,public router: Router, private cookies: CookieService) { }

  checkToken(){
    console.log("Verificando Token...")
    
    this.api.check().subscribe(data => {
        if(data.status){
          environment.nombre = data.user.nombre
          //environment.name = data.user.nombre //Guardo nombre del usuario
          console.log("Token valido")
        }else{
          console.log("Token no valido...")
          this.cookies.delete("token")
          this.router.navigateByUrl('/login');
        }
    }, error =>{
        alert("Error al validar el token --CheckTokenService")
        console.log("Error a validar el token, error:")
        console.log(error)
    });
    
  }
}
