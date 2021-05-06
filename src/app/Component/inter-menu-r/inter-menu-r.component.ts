import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { environment } from '../../../environments/environment.prod';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { Raspberry } from 'src/app/Interfaces/raspberry';

@Component({
  selector: 'app-inter-menu-r',
  templateUrl: './inter-menu-r.component.html',
  styleUrls: ['./inter-menu-r.component.css']
})
export class InterMenuRComponent implements OnInit {
  public ningunaRaspberry:Boolean = false
  public raspberries:Array<Raspberry>
  public raspModal_id
  public raspModal_nombre
  public raspModal_home_id

  constructor(private check: CheckTokenService,private api: ServiciosService) { }

  ngOnInit(): void {
    this.check.checkToken()
    this.getRaspberries()
  }

  getRaspberries(){
    console.log("Realizando peticion raspberries")
    const request = {'home_id': environment.home_id}
    this.api.getRaspberry(request).subscribe(data => {
      this.raspberries = data
      if(this.raspberries.length == 0){
        this.ningunaRaspberry = true
      }
      console.log(data)
      console.log(request)
    }, error =>{
      console.log("Error peticion raspberries")
      console.log(error)
    });
  }



  setRaspModal(){
    this.raspModal_id = environment.rasp_rasberry_id
    this.raspModal_home_id = environment.rasp_home_id
    this.raspModal_nombre = environment.rasp_nombre
  }
}
