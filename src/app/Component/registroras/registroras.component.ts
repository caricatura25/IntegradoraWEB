import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-registroras',
  templateUrl: './registroras.component.html',
  styleUrls: ['./registroras.component.css']
})
export class RegistrorasComponent implements OnInit {
  raspberryFrom:FormGroup; 
  request: Object
  constructor(private fb:FormBuilder,private check: CheckTokenService,public router: Router,private api: ServiciosService) { 
    this.crForm();
  }

  ngOnInit(): void {
    this.check.checkToken()
  }

  nuevaRaspberry(){
    this.setNuevaRaspbery()
    console.log(this.request)
    this.api.nuevaRaspberry(this.request).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/raspberry')
    }, error =>{
      console.log("Error peticiones agregar raspberry")
      console.log(error)
    });
  }

  setNuevaRaspbery() {
    this.request = {
      home_id: environment.home_id,
      nombre: this.raspberryFrom.get('nombre').value,
      modelo: this.raspberryFrom.get('modelo').value,
    }
  }
  

    //Validor Formulario
  crForm(): void {
    this.raspberryFrom = this.fb.group({
      nombre: ['',[Validators.required]],
      modelo: ['',[Validators.required]]
    });
  }
}

