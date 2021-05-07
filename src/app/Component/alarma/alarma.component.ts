import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrls: ['./alarma.component.css']
})
export class AlarmaComponent implements OnInit {
  
  constructor(private check: CheckTokenService,private cookies: CookieService,public router: Router,private api: ServiciosService) { }

  ngOnInit(): void {
    this.check.checkToken()
  }

}
