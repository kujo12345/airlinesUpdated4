import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {
  @Input() flight$: any;
  @Output() selectedFlight = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(currentFlight: number) {
    this.selectedFlight.emit(currentFlight);
  }
}
