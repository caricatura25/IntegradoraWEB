import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { environment } from "src/environments/environment.prod";

Injectable({providedIn: 'root'})
export class seg implements CanActivate{
    
    constructor(private router: Router){

    }
    canActivate(){
        if(environment.sessionstatus){
            return true
        }
        
        this.router.navigateByUrl('/login');
        return false
    }
}
