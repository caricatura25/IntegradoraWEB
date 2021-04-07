import { Component, Input, OnInit } from '@angular/core';
import { Humedad } from 'src/app/Interfaces/humedad';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-humedad',
  templateUrl: './card-humedad.component.html',
  styleUrls: ['./card-humedad.component.css']
})
export class CardHumedadComponent implements OnInit {
  @Input() sensores:Humedad
  
  constructor() { }

  ngOnInit(): void {
  } 
}
