import { Component, OnInit } from '@angular/core';
import { Foco } from 'src/app/Interfaces/foco';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-inter-controles',
  templateUrl: './inter-controles.component.html',
  styleUrls: ['./inter-controles.component.css']
})
export class InterControlesComponent implements OnInit {

  constructor(private api: ServiciosService) { }

  ngOnInit(): void {
    this.focospeticion()
  }

  public focos:Array<Foco>


  focospeticion(){
    console.log("realizabdo peticion")
    this.api.focos().subscribe(data => {
      console.log("hecho")
      this.focos = data
      console.log(data)
    }, error =>{
      console.log("Error peticion focos")
      console.log(error)
    });
  }

}
