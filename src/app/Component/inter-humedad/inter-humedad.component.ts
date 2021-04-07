import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Humedad } from 'src/app/Interfaces/humedad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inter-humedad',
  templateUrl: './inter-humedad.component.html',
  styleUrls: ['./inter-humedad.component.css']
})
export class InterHumedadComponent implements OnInit {

  public sensores:Array<Humedad>
  constructor(private Temp: ServiciosService) { }

  ngOnInit(): void {
    console.log("oninit")
  this.HUMEDAD()
  }
  HUMEDAD(){
    console.log("realizabdo peticion")
    this.Temp.humedad().subscribe(data => {
      console.log("hecho")
      this.sensores = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }
  
}
