import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';
//import  {  SocketIoModule ,  SocketIoConfig  }  from  'ngx-socket-io' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy {
  email: String;
  password: String;
  nombre: String
  loginForm:FormGroup; //Variable para validar forms
  
  constructor(private api: ServiciosService,private fb:FormBuilder,public router: Router,private cookies: CookieService) {
    this.logForm();
  }
  ngOnDestroy(): void {
    environment.nombre = this.nombre
  }

  ngOnInit(): void {
    
  }

  /* Form validation and setting */
  setLogin() {
    this.email = this.loginForm.get('email').value
    this.password = this.loginForm.get('password').value
    }

  logForm(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  /* Form validation and setting */

  login() {
    console.log("Iniciando peticion login")
    this.setLogin(); //seteo el formulario
    const request = { email: this.email, password: this.password };
    
    this.api.login(request).subscribe(data => {
      console.log("Sesion valida")
      
      if(data.home.home_id == null){
        console.log("home_id es null")
        environment.home_id = data.home.home
        environment.usuario = true
      }else{
        console.log("home es null")
        environment.home_id = data.home.home_id
      }
      this.nombre = data.home.nombre
      this.api.setToken(data.token.token);
      this.router.navigateByUrl("/raspberry")
    }, error => {
      console.log("Login error")
      console.log(error)
      if(error.status == 400){
        console.log("Bad request")
        alert("Email o password incorrectos")
      }
    });
  }

}
