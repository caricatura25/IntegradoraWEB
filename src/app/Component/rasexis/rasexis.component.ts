import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-rasexis',
  templateUrl: './rasexis.component.html',
  styleUrls: ['./rasexis.component.css']
})
export class RasexisComponent implements OnInit {
  exRaspberryFrom:FormGroup; 
  request: Object
  constructor(private fb:FormBuilder,private check: CheckTokenService,public router: Router,private api: ServiciosService) { 
    this.crForm();
  }

  ngOnInit(): void {
    this.check.checkToken()
  }

  existenteRaspberry(){
    this.setExistenteRaspberry()
    this.api.existenteRaspberry(this.request).subscribe(data => {
      console.log(this.request)
      console.log(data)
      this.router.navigateByUrl('/raspberry')
    }, error =>{
      console.log("Error peticiones agregar raspberry")
      console.log(error)
    });
  }

  setExistenteRaspberry() {
    var str = this.exRaspberryFrom.get('raspberry_id').value
    var i: number = +str;
    this.request = {
      home_id: environment.home_id,
      raspberry_id: i,
      nombre: this.exRaspberryFrom.get('nombre').value,
    }
  }
  

    //Validor Formulario
  crForm(): void {
    this.exRaspberryFrom = this.fb.group({
      raspberry_id: ['',[Validators.required]],
      nombre: ['',[Validators.required]]
    });
  }

}
