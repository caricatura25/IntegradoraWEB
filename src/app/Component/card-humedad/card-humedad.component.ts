import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Humedad } from 'src/app/Interfaces/humedad';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ServiciosService } from 'src/app/servicios.service';
import { InterHumedadComponent } from '../inter-humedad/inter-humedad.component';
import { Dispositivo } from 'src/app/Interfaces/dispositivo';

@Component({
  selector: 'app-card-humedad',
  templateUrl: './card-humedad.component.html',
  styleUrls: ['./card-humedad.component.css'],
})
export class CardHumedadComponent implements OnInit {
  @Input() sensoresH:Dispositivo
  public usuario:Boolean

  constructor(private api: ServiciosService,private interHumedad: InterHumedadComponent) { }

  ngOnInit(): void {
    this.usuario = environment.usuario
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
