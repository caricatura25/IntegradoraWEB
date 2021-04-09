import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_nombre: String;
  password: String;
  loginForm:FormGroup; //Variable para validar forms
  notadmin: Boolean
  
  constructor(private api: ServiciosService,private fb:FormBuilder,public router: Router) {
    this.logForm();
  }

  ngOnInit(): void {
  }

  login() {
    this.notadmin=false
    console.log("Iniciando peticion login admin")
    this.setLogin();
    const request = { email: this.email_nombre, password: this.password };
    this.api.login(request).subscribe(data => {
      this.api.setToken(data.token);
      environment.session=true
      console.log("Sea iniciado sesion por admin")
      console.log(data)
      this.router.navigateByUrl('/menu');
      console.log("show token")
      console.log(data.token)
    }, error =>{
      this.notadmin = true
      console.log("Login error admin")
      console.log(error)
      this.loginInvitado()
    });
  }

  setLogin() {
    this.email_nombre = this.loginForm.get('email_nombre').value
    this.password = this.loginForm.get('password').value
    }

  logForm(): void {
    this.loginForm = this.fb.group({
      email_nombre: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  loginInvitado(){
    console.log("Iniciando peticion login invitado")
      const request = { nombre: this.email_nombre, password: this.password };
      this.api.login_invited(request).subscribe(data => {
        if(data.status){
          environment.invited=true 
          console.log("Sea iniciado sesion por invitado")
          console.log(data)
          this.router.navigateByUrl('/menu');
        }
      }, error =>{
        alert("Email/nombre o password incorrectos")
        console.log("Login error")
        console.log(error)
      });
  }

}
