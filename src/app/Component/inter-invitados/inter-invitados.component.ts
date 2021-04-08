import { Component, OnInit } from '@angular/core';
import { Invitado } from 'src/app/Interfaces/invitado';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-inter-invitados',
  templateUrl: './inter-invitados.component.html',
  styleUrls: ['./inter-invitados.component.css']
})
export class InterInvitadosComponent implements OnInit {

  constructor(private api: ServiciosService) { }

  public invi_pendien:Array<Invitado>

  ngOnInit(): void {
    console.log("OnInit")
    this.invi_pendientes()
  }

  invi_pendientes(){
    console.log("realizando peticion")
    this.api.humedad().subscribe(data => {
      console.log("hecho")
      this.invi_pendien = data
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }

  invitados(){

  }

}
