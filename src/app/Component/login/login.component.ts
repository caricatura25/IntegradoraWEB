import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios.service';

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
  
  constructor(private fb:FormBuilder, private api: ServiciosService, public router: Router) {
    this.logForm();
  }

  ngOnInit(): void {
  }

  login() {
    
    console.log("Iniciando peticion login admin")
    this.setLogin();
    const request = { email: this.email_nombre, password: this.password };
    this.api.login(request).subscribe(data => {
      this.api.setToken(data);
      console.log("Sea iniciado sesion por admin")
      console.log(data)
      this.router.navigateByUrl('/menu');
    }, error =>{
      this.notadmin = true
      alert("Email o Password incorrectos")
      console.log("Login error")
      console.log(error)
    });

    if(this.notadmin){
      console.log("Iniciando peticion login invitado")
      const request = { nombre: this.email_nombre, password: this.password };
      this.api.login_invited(request).subscribe(data => {
        if(data.status){
          console.log("Sea iniciado sesion por invitado")
          console.log(data)
          this.router.navigateByUrl('/menu');
        }
      }, error =>{
        alert("nombre o Password incorrectos")
        console.log("Login error")
        console.log(error)
      });
      this.notadmin = false
    }


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

}
