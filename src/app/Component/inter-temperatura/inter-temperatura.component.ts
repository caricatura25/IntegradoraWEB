import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';
import Ws from '@adonisjs/websocket-client';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts'; 
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheckTokenService } from 'src/app/Services/check-token.service';



@Component({
  selector: 'app-inter-temperatura',
  templateUrl: './inter-temperatura.component.html',
  styleUrls: ['./inter-temperatura.component.css']
})
export class InterTemperaturaComponent implements OnInit,OnDestroy {
  
  public datos:Array<Dato>
  public sensor:Temperatura
  public datosGraf: ChartDataSets[] = [];
  public datosGraf_length = 0;

  public tempActual:String = null;


 

  constructor(private check: CheckTokenService,private api: ServiciosService, public router: Router, public cookies:CookieService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }


  

  ngOnDestroy(){
    console.log("Saliendo del componente")
    
  }
 
}
