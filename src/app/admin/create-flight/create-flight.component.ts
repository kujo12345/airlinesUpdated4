import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Flight } from 'shared/flight-info.service';
import { FlightService } from 'shared/flight.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
  loggedUser: any;
  

  constructor(private fb: FormBuilder, private flight_service: FlightService) { }
  
  flight$ = [];

  flightInformation = {
    destination: 'Cebu',
    origin: 'Manila',
    departure: '5:00',
    arrival: '14:00',
    type: '1-Way', 
    code: '1100', 
    airline: 'Philippine Airlines'
  };

  flightForm = this.fb.group({  // the submission form 
    $flightKey: [''],
    destination: ['', Validators.minLength(1), Validators.required],
    origin: ['', Validators.minLength(1), Validators.required],
    departure: ['', Validators.minLength(1), Validators.required],
    arrival: ['', Validators.minLength(1), Validators.required],
    type: ['', Validators.minLength(1), Validators.required],
    code: ['', Validators.minLength(1), Validators.required],
    airline: ['', Validators.minLength(1), Validators.required]
  });
  
  onSubmit(){
    const payload: Flight = {
      destination: this.form.destination.value,
      origin: this.form.origin.value,
      departure: this.form.departure.value,
      arrival: this.form.arrival.value,
      type: this.form.type.value,
      code: this.form.code.value,
      airline: this.form.airline.value
    }
    this.flight$.addFlight(payload);
    this.flightForm.reset();
  } 

  get form(){
    return this.flightForm.controls;
  }

  ngOnInit(): void {
    this.flight_service.getFlight().subscribe((flightInformation) => {  //getting the flight information 
      this.flight$ = flightInformation;
    });
    this.loggedUser = JSON.parse(localStorage.getItem('flightInformation'));
  }

}
