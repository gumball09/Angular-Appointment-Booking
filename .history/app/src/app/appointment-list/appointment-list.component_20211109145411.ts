import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  // Define public variables
  public loading = true;
  public errorMsg : string;

  constructor() { }

  ngOnInit(): void {
  }

}
