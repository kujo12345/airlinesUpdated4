import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Booking } from 'shared/booking-info.service';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
export class BookFlightsComponent implements OnInit {
  bookForm: any;
  bookingID: any;
  code: any;
  username: any;

  constructor(private bf: FormBuilder, private booking: Booking) {}

  ngOnInit(): void{
    this.bookForm = this.bf.group({ //submission form
      $bookKey: [this.booking.$key],
      bookingID: [this.booking.bookingID, Validators.required],
      code: [this.booking.code, Validators.required],
      username: [this.booking.username, Validators. required]
    });
    
  }

  onSubmit(){
    const payload2: Booking = {
      $key: this.booking.$key,
      bookingID: this.bookingID.value,
      code: this.code.value,
      username: this.username.value
    };
    this.booking.addBooking(payload2);
    this.bookForm.reset();
  }

  get form(){
    return this.bookForm.controls;
  }

  onSelect(index: any){
    this.selectedUser: true;
    this.selectedFlight: true;
    this.selectIndex: index;
  }

  submitBooking(value: any){
    this.selectedUser: value;
    this.selectedFlight: value;
    this.selectIndex: null;
  }
}
