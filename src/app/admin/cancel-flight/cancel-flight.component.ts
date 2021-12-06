import { Component, Input, OnInit, Output } from '@angular/core';
import { FlightService } from 'shared/flight.service';


@Component({
  selector: 'app-cancel-flight',
  templateUrl: './cancel-flight.component.html',
  styleUrls: ['./cancel-flight.component.css']
})
export class CancelFlightComponent implements OnInit {

  @Input() code!: string;
  @Output() deleted!: boolean;

  constructor(private flight: FlightService) {}

  ngOnInit(): void {}

  removeFlight(code: string) {
    this.flight.removeFlight(code);
  }


}
