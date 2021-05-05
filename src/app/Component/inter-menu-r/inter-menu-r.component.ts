import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public raspberries:Array<Raspberry>

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
      console.log(data)
      console.log(request)
    }, error =>{
      console.log("Error peticion raspberries")
      console.log(error)
    });
  }
}
