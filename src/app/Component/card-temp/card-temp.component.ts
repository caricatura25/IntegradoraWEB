import { Component, OnInit } from '@angular/core';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { Router } from '@angular/router';
//import { ServiciosService } from 'src/app/servicios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-temp',
  templateUrl: './card-temp.component.html',
  styleUrls: ['./card-temp.component.css']
})
export class CardTempComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}

