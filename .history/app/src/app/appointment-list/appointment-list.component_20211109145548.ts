import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/Appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  // Define public variables
  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public appointments: Appointment[] = [];

  // Inject the HTTP service to make requests to backend
  constructor(private appt : HttpClient) {}

  ngOnInit(): void {}
}
