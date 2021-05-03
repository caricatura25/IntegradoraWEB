import { Component, OnInit } from '@angular/core';
import { CheckTokenService } from 'src/app/Services/check-token.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-menu-r',
  templateUrl: './menu-r.component.html',
  styleUrls: ['./menu-r.component.css']
})
export class MenuRComponent implements OnInit {

  constructor(private check:CheckTokenService) { }

  ngOnInit(): void {
    this.check.checkToken()
  }

}
