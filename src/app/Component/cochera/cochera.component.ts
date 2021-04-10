import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cochera',
  templateUrl: './cochera.component.html',
  styleUrls: ['./cochera.component.css']
})
export class CocheraComponent implements OnInit {

  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  ngOnInit(): void {
    this.checkToken()
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
