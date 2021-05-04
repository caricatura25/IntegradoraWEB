import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { ServiciosService } from 'src/app/servicios.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public invited:Boolean =  environment.invited;
  constructor(private cookies: CookieService,public router: Router,private api: ServiciosService,private check: CheckTokenService) { }
  
  ngOnInit(): void {
    this.check.checkToken()
  }

}
