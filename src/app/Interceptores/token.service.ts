import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiciosService } from '../servicios.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private api: ServiciosService, public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptando peticion...") 

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.api.getToken()
    })

    const reqclone = req.clone({
      headers
    }) 
    console.log("Iterceptor: Token Instertado")
    return next.handle( reqclone );
  }
}
