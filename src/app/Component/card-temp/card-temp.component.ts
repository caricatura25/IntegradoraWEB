import { Component, Input,OnInit } from '@angular/core';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-card-temp',
  templateUrl: './card-temp.component.html',
  styleUrls: ['./card-temp.component.css']
})
export class CardTempComponent implements OnInit {
  @Input() sensores:Temperatura
  public invited:Boolean =  environment.invited;
  constructor() {
  }

  ngOnInit(): void {
  }
}

