import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

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
    console.log("Token eliminado")
    this.router.navigateByUrl('/login');
  }

}
