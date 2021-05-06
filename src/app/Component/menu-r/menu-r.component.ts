import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Raspberry } from 'src/app/Interfaces/raspberry';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';
import { InterMenuRComponent } from '../inter-menu-r/inter-menu-r.component';


@Component({
  selector: 'app-menu-r',
  templateUrl: './menu-r.component.html',
  styleUrls: ['./menu-r.component.css']
})
export class MenuRComponent implements OnInit {
  @Input() raspberries:Raspberry
  public nombre

  constructor(private check:CheckTokenService,public router: Router,private api: ServiciosService,private inter_menu_r: InterMenuRComponent) { }

  ngOnInit(): void {
    this.check.checkToken()
  }

  eventoRaspberry(){
    environment.raspberry_id = this.raspberries.raspberry_id
    this.router.navigateByUrl('/raspberry/dispositivos')
  }

  removerRaspberry(){
    
    console.log("Realizado peticion remover raspberry")
    const request = {home_id:environment.rasp_home_id,raspberry_id: environment.rasp_rasberry_id}
    this.api.removerRaspberry(request).subscribe(data => {
      console.log(data)
      this.inter_menu_r.getRaspberries()
    }, error =>{
      console.log("Error peticion remover raspberry")
      console.log(error)
    });
    
  }

  eliminarRaspberry(){
    console.log("Realizado peticion eliminar raspberry")
    const request = {raspberry_id: environment.rasp_rasberry_id}
    this.api.eliminarRaspberry(request).subscribe(data => {
      console.log(data)
      this.inter_menu_r.getRaspberries()
    }, error =>{
      console.log("Error peticion eliminar raspberry")
      console.log(error)
    });
  }


  RaspberryID(){
    environment.rasp_rasberry_id = this.raspberries.raspberry_id
    environment.rasp_home_id = this.raspberries.home_id
    environment.rasp_nombre = this.raspberries.nombre
    this.nombre = environment.rasp_nombre

    this.inter_menu_r.setRaspModal()

    console.log(environment.rasp_rasberry_id)
    console.log(environment.rasp_home_id)
    console.log(environment.rasp_nombre)
  }

}
