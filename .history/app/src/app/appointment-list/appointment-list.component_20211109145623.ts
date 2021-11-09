import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/Appointment';
import { AppointmentServiceSer } from '../appointment-service.service'

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
  constructor(private apptService: AppointmentService) {}

  ngOnInit(): void {}
}
