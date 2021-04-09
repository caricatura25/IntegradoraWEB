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

  temperatura():Observable<any>{
    return this.http.get<any>(`${this.apiURL}sensors/temperature`)
  }

  humedad():Observable<any>{
    return this.http.get<any>(`${this.apiURL}sensors/humidity`)
  }

  focos():Observable<any>{
    return this.http.get<any>(`${this.apiURL}lights`)
  }
}
