import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reg-invitado',
  templateUrl: './reg-invitado.component.html',
  styleUrls: ['./reg-invitado.component.css']
})
export class RegInvitadoComponent implements OnInit {
  public nombre:String
  usuarioFrom:FormGroup; 
  request: Object
  constructor(private fb:FormBuilder,private check: CheckTokenService,public router: Router,private api: ServiciosService) {
    this.crForm();
  }

  ngOnInit(): void {
    this.check.checkToken()
    this.nombre = environment.nombre
  }

  nuevoUsuario(){
    this.setNuevoUsuario()
    console.log(this.request)
    console.log("Iniciando peticion registro usuario")
    this.api.nuevoUsuario(this.request).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/usuarios')
    }, error =>{
      console.log("Error peticiones agregar usuario")
      console.log(error.status)
      if(error.status == 400){
        alert("Email ya registrado, ingresa un nuevo email")
      }
      console.log(error)
    });
  }

  setNuevoUsuario() {
    this.request = {
      home: environment.home_id,
      nombre: this.usuarioFrom.get('nombre').value,
      apellido: this.usuarioFrom.get('apellido').value,
      email: this.usuarioFrom.get('email').value,
      password: this.usuarioFrom.get('password').value,
    }
  }
  

    //Validor Formulario
  crForm(): void {
    this.usuarioFrom = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

}
