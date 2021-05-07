import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  public pines:Array<Number>
  dispositivoForm:FormGroup; 
  request: Object
  constructor(private check: CheckTokenService,private fb:FormBuilder,private cookies: CookieService,public router: Router,private api: ServiciosService) { 
    this.crForm();
  }

  ngOnInit(): void {
    this.check.checkToken()
    this.peticionpines()
  }
  peticionpines(){
    const request = {raspberry_id: environment.raspberry_id }
    console.log("Realizando peticion pines")
    this.api.pinesRaspberry(request).subscribe(data => {
      this.pines = data
      console.log(data)
    }, error =>{
      console.log("Error peticiones pines")
      console.log(error)
    });
  }

  peticiondispositivo(){
    this.setdispositivo();
    console.log(this.request)
    this.api.device(this.request).subscribe(data => {
      console.log("Se añadio nuevo dispositivo")
      console.log(data)
      this.router.navigateByUrl('/raspberry/dispositivos');
    }, error =>{
      console.log("Error peticiones add device")
      console.log(error)
    }); 
  }


  setdispositivo() {
    var x = this.dispositivoForm.get('pin').value
    var y: number = +x;
    this.request = {
      raspberry_id: environment.raspberry_id,
      nombre: this.dispositivoForm.get('nombre').value,
      descripcion: this.dispositivoForm.get('descripcion').value,
      tipo: this.dispositivoForm.get('tipo').value,
      pin: y
    }
  }

    //Validor Formulario
  crForm(): void {
    this.dispositivoForm = this.fb.group({
      nombre: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      tipo: ['',[Validators.required]],
      pin: ['',[Validators.required]]
    });
  }

}
