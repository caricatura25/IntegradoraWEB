import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  request: Object
  registroForm:FormGroup; //Variable para validar forms
  constructor(private fb:FormBuilder, private api: ServiciosService, public router: Router) {
    this.crForm();
  }

  ngOnInit(): void {
  }

  registro() {
    this.setRegistro();
    
    this.api.register(this.request).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/login');
    }, error =>{
      alert("No se pudo completar el registro")
      console.log("Registro error")
      console.log(error)
    });
  }
  
  //Setear adtos del formulario
  setRegistro() {
    this.request = {
      nombre: this.registroForm.get('nombre').value,
      apellido: this.registroForm.get('apellido').value,
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }
  }

    //Validor Formulario
  crForm(): void {
    this.registroForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

}
