import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';
import { Temperatura } from 'src/app/Interfaces/temperatura';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Dato } from 'src/app/Interfaces/dato';
import Ws from '@adonisjs/websocket-client';
//import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import { Color, BaseChartDirective, Label } from 'ng2-charts'; */



@Component({
  selector: 'app-inter-temperatura',
  templateUrl: './inter-temperatura.component.html',
  styleUrls: ['./inter-temperatura.component.css']
})
export class InterTemperaturaComponent implements OnInit {
  public invited:Boolean = environment.invited;
  public datos:Array<Dato>
  public sensor:Temperatura
  public datosGraf //ChartDataSets[] = [];
  public datosGraf_length = 0;

  public tempActual = null;

/*   

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
 */
  ws: any;
  chat: any;

  temperatura: string;

  constructor(private api: ServiciosService, public router: Router, public cookies:CookieService) { }

  ngOnInit(): void {
    this.checkToken()
    console.log("oninit")
    this.peticionsensor() //Informacion de temperatura
  }


  peticionsensor(){ //Peticion para obtener la informacion del sensor de temperatura
    console.log("realizabdo peticion sensor")
    const request = {'dispositivo_id': 1}
    this.api.temperatura(request).subscribe(data => {
      console.log("hecho sensor de temperatura")
      this.sensor = data
      console.log(data)
      this.temperaturaSocket()
      this.peticiondatos()
    }, error =>{
      console.log("Error peticion sensor Temperatura")
      console.log(error)
    });
  }

  temperaturaSocket(){
    this.ws = Ws("ws://127.0.0.1:3333"); //ruta de mi web socket

    this.ws.connect(); //me conecto al ws
    this.chat = this.ws.subscribe("wstemp") //subscribo al canal
    this.chat.emit("message", this.sensor); //Envio la informacion del sensor que quiero monitoriar1

    this.chat.on("message", (data:any) =>{//recibir mesnajes que estan mandado otros clientes
      this.temperatura = data
    }) 
  }   

  /* llenarGrafica(){
    // console.log("Grafica", this.datos);
    
    let datosAux = [];


    this.datos.map(item => {
        // console.log('item ',item);

        let temp = item.dato['temperatura'];

        datosAux.push(temp);

    });

    

    // console.log('aux ',datosAux);

    this.datosGraf.push({data: datosAux, label: 'Temperatura'});

    this.tempActual = this.datos[this.datos.length -1]['dato']['temperatura'];

    this.datosGraf_length = this.datosGraf.length;

  } */
  
  peticiondatos(){ //Peticion para mostrar los ultimos 5 datos
    console.log("realizado peticion")
    const request = {dispositivo_id: this.sensor.dispositivo_id, limit: 5}
    this.api.datos(request).subscribe(data => {
      console.log("hecho")
      this.datos = data.registros
      console.log(data)
      //this.llenarGrafica()
    }, error =>{
      console.log("Error peticion datos Temperatura")
      console.log(error)
    });
    
  }


  checkToken(){
    console.log("Verificando Token-- CheckToken()")
    
    this.api.check().subscribe(data => {
        if(data.status){
            console.log("Autorizado User")
        }else if(environment.invited){
            console.log("Autorizado Invitado")
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
  /* public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  } */
}
