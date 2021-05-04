import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from '../../servicios.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-inter-menu-r',
  templateUrl: './inter-menu-r.component.html',
  styleUrls: ['./inter-menu-r.component.css']
})
export class InterMenuRComponent implements OnInit {

  public rasp_lenght = null;

  constructor(private service: ServiciosService) { }

  ngOnInit(): void {
    this.getRasp();
  }

  // /show/raspberries

  getRasp() {  
      // console.log(environment.home_id);
    this.service.getRaspberry({home_id: 1}).subscribe(res => {
        // console.log(res);
    });
  }
}
