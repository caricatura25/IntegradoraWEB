import { Component, Input,OnInit } from '@angular/core';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ServiciosService } from 'src/app/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-temp',
  templateUrl: './card-temp.component.html',
  styleUrls: ['./card-temp.component.css']
})
export class CardTempComponent implements OnInit {
  @Input() sensores:Temperatura
  public invited:Boolean =  environment.invited;
  constructor(private api: ServiciosService) {
  }

  ngOnInit(): void {
  }

  eliminarTemperatura(sensor){
    const request = {dispositivo_id: sensor.dispositivo_id}
    console.log(request)
    this.api.deletedevice(request).subscribe(data => {
      console.log("hecho delete/device")
      console.log(data)
    }, error =>{
      console.log("Eliminar Temperatura error")
      console.log(error)
    }); 
  }
}

