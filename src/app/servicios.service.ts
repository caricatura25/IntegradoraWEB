import { Injectable } from '@angular/core';
import { environment} from 'src/environments/environment.prod';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './Interfaces/user';
import { CookieService } from "ngx-cookie-service";
import { Invitado } from './Interfaces/invitado';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  apiURL=environment.apiURL
  constructor(private http:HttpClient, private cookies: CookieService) { }

  register(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}register`, request)
  }

  login(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}login`, request)
  }

  login_invited(request: Object):Observable<any>{
    return this.http.post<Invitado>(`${this.apiURL}login/invited`, request)
  }

  setToken(token) {
    this.cookies.set("token", token);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  temperatura(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}data/device`,request)
  }
  pines():Observable<any>{
    return this.http.get<any>(`${this.apiURL}pines`)
  }

  datos(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}show/last`,request)
  }

  device(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}device`,request)
  }

  humedad(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}data/device`,request)
  }

  nuevaRaspberry(request: Object):any {
    return this.http.post(`${this.apiURL}register/raspberry`, request);
  }

  existenteRaspberry(request: Object):any {
    return this.http.post(`${this.apiURL}register/raspberry/existing`, request);
  }

  removerRaspberry(request: Object):any {
    return this.http.post(`${this.apiURL}delete/raspberry/home`, request);
  }

  eliminarRaspberry(request: Object):any {
    return this.http.post(`${this.apiURL}delete/raspberry`, request);
  }

  getRaspberry(request: Object):any {
    return this.http.post(`${this.apiURL}show/raspberries`, request);
  }

  getDispositivos(request: Object):any {
    return this.http.post(`${this.apiURL}show/devices`, request);
  }

  pending_invited():Observable<any>{
    return this.http.get<any>(`${this.apiURL}pending/invited`)
  }

  invited():Observable<any>{
    return this.http.get<any>(`${this.apiURL}invited`)
  }

  deleteinvited(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}delete/invited`,request)
  }

  deletedevice(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}delete/device`,request)
  }

  acceptinvited(request: Object):Observable<any>{
    return this.http.post<User>(`${this.apiURL}request/invited`,request)
  }

  focos():Observable<any>{
    return this.http.get<any>(`${this.apiURL}lights`)
  }

  check():Observable<any>{
    return this.http.get<any>(`${this.apiURL}check`)
  }
}
