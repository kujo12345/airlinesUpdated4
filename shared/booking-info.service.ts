import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingInfoService {

  constructor() { }
  
}
export interface Booking{
  $key: any;
  bookingID: number;
  code: number; //Flight Code
  username: string; //Username
}