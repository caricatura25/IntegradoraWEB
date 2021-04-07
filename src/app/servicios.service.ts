import { Injectable } from '@angular/core';
import { Temperatura } from '../app/Interfaces/temperatura';
import { Humedad } from '../app/Interfaces/humedad';
import { environment} from 'src/environments/environment.prod';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  apiURL=environment.apiURL
  constructor(private http:HttpClient) { }
  
  temperatur():Observable<any>{
    return this.http.get<any>(`${this.apiURL}temperature`)
  }
  humedad():Observable<any>{
    return this.http.get<any>(`${this.apiURL}sensors/humidity`)
  }

  focos():Observable<any>{
    return this.http.get<any>(`${this.apiURL}lights`)
  }
}
