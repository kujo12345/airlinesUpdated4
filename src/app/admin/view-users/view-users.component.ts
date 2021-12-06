import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  @Input() user$: any;
  @Output() selectedUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(currentUser: number) {
    this.selectedUser.emit(currentUser);
  }
}
