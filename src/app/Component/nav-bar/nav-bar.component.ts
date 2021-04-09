import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookies: CookieService,public router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    console.log("Cerrando Sesion...")
    this.cookies.delete("token")
    environment.session=false
    console.log("Token eliminado")
    this.router.navigateByUrl('/login');
  }

}
