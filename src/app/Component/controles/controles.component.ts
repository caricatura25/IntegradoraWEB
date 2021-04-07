import { Component, Input, OnInit } from '@angular/core';
import { Foco } from 'src/app/Interfaces/foco';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {
  @Input() focos:Foco
  constructor() { }

  ngOnInit(): void {
  }

}
