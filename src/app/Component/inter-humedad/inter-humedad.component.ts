import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Humedad } from 'src/app/Interfaces/humedad';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import Ws from '@adonisjs/websocket-client';
import { NgxSpinnerService } from "ngx-spinner";
import { CheckTokenService } from 'src/app/Services/check-token.service';



@Component({
  selector: 'app-inter-humedad',
  templateUrl: './inter-humedad.component.html',
  styleUrls: ['./inter-humedad.component.css']
})
export class InterHumedadComponent implements OnInit,OnDestroy {
  
  public sensor:Humedad
  public datos:Array<Dato>

  public datosGraf: ChartDataSets[] = [];
  public datosGraf_length = 0;

  public humeActual = null;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(44,60,193,0.5)',
      borderColor: 'rgba(44,60,193,1)',
      pointBackgroundColor: 'rgba(44,60,193,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        // {
        //   id: 'y-axis-0',
        //   position: 'left',
        // },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'blue',
        //   }
        // }
      ]
    },
    annotation: {
      // annotations: [
      //   {
      //     type: 'line',
      //     mode: 'vertical',
      //     scaleID: 'x-axis-0',
      //     value: 'March',
      //     borderColor: 'orange',
      //     borderWidth: 2,
      //     label: {
      //       enabled: true,
      //       fontColor: 'orange',
      //       content: 'LineAnno'
      //     }
      //   },
      // ],
    },
  };


  constructor(private check: CheckTokenService,private Hum: ServiciosService,private cookies: CookieService,public router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  this.check.checkToken()
  this.spinner.show();
  setTimeout(() => {
    /** spinner ends after 4 seconds */
    this.spinner.hide();
  }, 2000);
  //this.peticiondatos()
  console.log("oninit")
  this.getSensoresH()
  //this.huemdadSocket()
  }

  getSensoresH(){
    console.log("realizando peticion")
    const request = {raspberry_id: environment.raspberry_id,tipo: "Temperatura_Humedad"}
    this.Hum.getDispositivosTipo(request).subscribe(data => {
      console.log("hecho peticion sensoresH")
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }


graficaHumedad(){

  let datosAux = [];


  this.datos.map(item => {
      // console.log('item ',item);

      let hume = item.dato['humedad'];

      datosAux.push(hume);

  });

  

  // console.log('aux ',datosAux);

  this.datosGraf.push({data: datosAux, label: 'Humedad'});

  

  this.datosGraf_length = this.datosGraf.length;

}
  
  peticiondatos(){
    console.log("realizabdo peticion")
    const request = {dispositivo_id: this.sensor.dispositivo_id, limit: 7}
    this.Hum.datos(request).subscribe(data => {
      console.log("hecho")
      this.datos = data.registros
      console.log(data)
      this.graficaHumedad()
    }, error =>{
      console.log("Error peticion datos Temperatura")
      console.log(error)
    });
  }

  ngOnDestroy(){
    /* console.log("Saliendo del componente")
    this.ws.close() */
  }
}
