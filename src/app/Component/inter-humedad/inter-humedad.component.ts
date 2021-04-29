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



@Component({
  selector: 'app-inter-humedad',
  templateUrl: './inter-humedad.component.html',
  styleUrls: ['./inter-humedad.component.css']
})
export class InterHumedadComponent implements OnInit,OnDestroy {
  public invited:Boolean =  environment.invited;
  public sensor:Humedad
  public datos:Array<Dato>
  ws: any;
  chat: any;
  humedad: string

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

 
  constructor(private Hum: ServiciosService,private cookies: CookieService,public router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  this.checkToken()
  this.spinner.show();
  setTimeout(() => {
    /** spinner ends after 4 seconds */
    this.spinner.hide();
  }, 2000);
  //this.peticiondatos()
  console.log("oninit")
  this.HUMEDAD()
  //this.huemdadSocket()
  }

  HUMEDAD(){
    console.log("realizando peticion")
    const request = {dispositivo_id: 1}
    this.Hum.humedad(request).subscribe(data => {
      console.log("hecho")
      this.sensor = data
      this.connect_ws()
      this.peticiondatos()
      console.log(data)
    }, error =>{
      console.log("Error peticion sensores humedad")
      console.log(error)
    });
  }

  connect_ws(){
    const opciones = {reconnection:true}
    this.ws = Ws(environment.wsURL,opciones); //ruta de mi web socket

    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wshum") //subscribo al canal
    this.humedadsocket()
  }


  humedadsocket(){
    this.chat.emit("message", this.sensor); //Envio la informacion del sensor que quiero monitoriar1

    this.chat.on("message", (data:any) =>{//recibir mesnajes que estan mandado otros clientes
      this.humeActual = data
    })
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


  
  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.Hum.check().subscribe(data => {
        if(data.status){
            console.log("Autorizado User")
            this.connect_ws()
        }else if(environment.invited){
            console.log("Autorizado Invitado")
            this.connect_ws()
        }else{
            console.log("No autorizado")
            environment.invited = false
            this.cookies.delete("token")
            this.router.navigateByUrl('/login');
        }
    }, error =>{
        alert("No se pudo completar el registro")
        console.log("Registro error")
        console.log(error)
    });
    
  }

  ngOnDestroy(){
    console.log("Saliendo del componente")
    this.ws.close()
  }
}
