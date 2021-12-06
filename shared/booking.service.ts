import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Booking } from './booking-info.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingCollection: AngularFirestoreCollection<Booking>;
  booking$!: Observable<Booking[]>;
  
  constructor(private firestore: AngularFirestore) {
    this.bookingCollection = this.firestore.collection<Booking>('Bookings');
    this.booking$ = this.bookingCollection.valueChanges();
   }

  addBooking(_booking$: Booking) {
    const booking_key = this.firestore.createId();
    _booking$.$key = booking_key;
    this.bookingCollection.doc(booking_key).set(_booking$);
  }

  getBooking(){
    return this.booking$;
  }
}
