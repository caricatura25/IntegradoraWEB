import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Humedad } from 'src/app/Interfaces/humedad';


@Component({
  selector: 'app-inter-humedad',
  templateUrl: './inter-humedad.component.html',
  styleUrls: ['./inter-humedad.component.css']
})
export class InterHumedadComponent implements OnInit {

  public sensores:Array<Humedad>
  constructor(private Hum: ServiciosService) { }

  ngOnInit(): void {
    console.log("oninit")
  this.HUMEDAD()
  }

  HUMEDAD(){
    console.log("realizabdo peticion")
    this.Hum.humedad().subscribe(data => {
      console.log("hecho")
      this.sensores = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }
}
