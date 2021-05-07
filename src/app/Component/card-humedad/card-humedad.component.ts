import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Humedad } from 'src/app/Interfaces/humedad';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ServiciosService } from 'src/app/servicios.service';
import { InterHumedadComponent } from '../inter-humedad/inter-humedad.component';

@Component({
  selector: 'app-card-humedad',
  templateUrl: './card-humedad.component.html',
  styleUrls: ['./card-humedad.component.css'],
})
export class CardHumedadComponent implements OnInit {
  @Input() sensores:Humedad
  

  constructor(private api: ServiciosService,private interHumedad: InterHumedadComponent) { }

  ngOnInit(): void {
  } 

  eliminarHumedad(sensor){
    const request = {dispositivo_id: sensor.dispositivo_id}
    console.log(request)
    this.api.deletedevice(request).subscribe(data => {
      console.log("hecho delete/device")
      this.interHumedad.getSensoresH()
      console.log(data)
    }, error =>{
      console.log("Eliminar Humedad error")
      console.log(error)
    }); 
  }
}
