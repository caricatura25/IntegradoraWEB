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
  public usuario: Boolean

  constructor(private check:CheckTokenService,public router: Router,private api: ServiciosService,private inter_menu_r: InterMenuRComponent) { }

  ngOnInit(): void {
    this.check.checkToken()
    this.setEnvironmet()
  }

  eventoRaspberry(){
    environment.raspberry_id = this.raspberries.raspberry_id
    this.router.navigateByUrl('/raspberry/dispositivos')
  }

  setEnvironmet(){
    this.usuario = environment.usuario
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
