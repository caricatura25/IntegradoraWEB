import { Component, Input,OnInit } from '@angular/core';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-temp',
  templateUrl: './card-temp.component.html',
  styleUrls: ['./card-temp.component.css']
})
export class CardTempComponent implements OnInit {
  @Input() sensores:Temperatura
  constructor() {
  }

  ngOnInit(): void {
  }
}

