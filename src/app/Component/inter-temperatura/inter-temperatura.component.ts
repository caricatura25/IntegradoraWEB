import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Temperatura } from 'src/app/Interfaces/temperatura';

@Component({
  selector: 'app-inter-temperatura',
  templateUrl: './inter-temperatura.component.html',
  styleUrls: ['./inter-temperatura.component.css']
})
export class InterTemperaturaComponent implements OnInit {

  public sensores:Array<Temperatura>
  constructor(private Temp: ServiciosService) { }

  ngOnInit(): void {
    console.log("oninit")
    this.TEMPERATURA()
  }
  TEMPERATURA(){
    console.log("realizabdo peticion")
    this.Temp.temperatura().subscribe(data => {
      console.log("hecho")
      this.sensores = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores Temperatura")
      console.log(error)
    });
  }
}
