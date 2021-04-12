import { Component, Input, OnInit } from '@angular/core';
import { Humedad } from 'src/app/Interfaces/humedad';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-card-humedad',
  templateUrl: './card-humedad.component.html',
  styleUrls: ['./card-humedad.component.css'],
  template: `<button (click)="function2()">click</button>`
})
export class CardHumedadComponent implements OnInit {
  @Input() sensores:Humedad
  public invited:Boolean =  environment.invited;

  constructor(private api: ServiciosService) { }

  ngOnInit(): void {
  } 

  eliminarHumedad(sensor){
    const request = {dispositivo_id: sensor.dispositivo_id}
    console.log(request)
    this.api.deletedevice(request).subscribe(data => {
      console.log("hecho delete/device")
      console.log(data)
    }, error =>{
      console.log("Eliminar Humedad error")
      console.log(error)
    }); 
  }
}
