import { Injectable } from '@angular/core';
import {  CanActivateChild} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminChildrenGuard implements CanActivateChild {
  
  $isLoggedUser!: string;
  $isAdmin!: string;

  canActivateChild(){
    if(isLoggedUser){
      return false;
    }
    else{
      return true;
    }
  }
  
}
