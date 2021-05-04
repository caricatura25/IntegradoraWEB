import { Component, OnInit } from '@angular/core';
import { CheckTokenService } from 'src/app/Services/check-token.service';

@Component({
  selector: 'app-rasexis',
  templateUrl: './rasexis.component.html',
  styleUrls: ['./rasexis.component.css']
})
export class RasexisComponent implements OnInit {

  constructor(private check: CheckTokenService) { }

  ngOnInit(): void {
    this.check.checkToken()
  }

}
