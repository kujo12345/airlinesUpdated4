import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoService {

  constructor() { }
}

export interface Flight{
  destination: string;
  origin: string;
  departure: datetime;
  arrival: datetime;
  type: string;
  code: number;
  airline: string;
}
