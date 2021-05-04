import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiciosService } from '../../servicios.service';
import { environment } from '../../../environments/environment.prod';
import { CheckTokenService } from 'src/app/Services/check-token.service';

@Component({
  selector: 'app-inter-menu-r',
  templateUrl: './inter-menu-r.component.html',
  styleUrls: ['./inter-menu-r.component.css']
})
export class InterMenuRComponent implements OnInit {



  constructor(private check: CheckTokenService) { }

  ngOnInit(): void {
    this.check.checkToken()
    
  }

  // /show/raspberries

  
}
