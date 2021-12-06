import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Flight } from './flight-info.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flightCollection: AngularFirestoreCollection<Flight>;
  flight$!: Observable<Flight[]>;
  
  constructor(private firestore: AngularFirestore) {
    this.flightCollection = this.firestore.collection<Flight>('Flights');
    this.flight$ = this.flightCollection.valueChanges();
   }

  getFlight(){
    return this.flight$;
  }

  addFlight(flight: Flight) {
    const flight_key = this.firestore.createId();
    flight.$key = flight_key;
    this.flightCollection.doc(flight_key).set(flight);
  }

  removeFlight(code: string): void {
    this.flightCollection.doc(code).delete();
  }
}
