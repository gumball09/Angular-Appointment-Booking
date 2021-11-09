import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/model/Appointment';
import { AppointmentServiceService } from '../appointment-service.service'
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  // Define public variables
  public loading = false;
  public errorMsg: string;
  public successMsg: string;
  public appointments: Appointment[] = [];

  // Inject the custom HTTP service to make requests to backend
  constructor(private apptService: AppointmentServiceService) {}

  ngOnInit() {
    this.apptService
      // get the appointments
      .getAppointments() 
      // subscribe to the observables to retrieve the data
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.loading = true;
      }, (error : ErrorEvent ) => {
        this.errorMsg = error.error.message;
      })
  }

  // Cancel Appointment Button
  cancelAppointment(id: string) {
    this.apptService
      .cancelAppointment(id)
      // automatically reload the data
      .pipe(
        mergeMap(() => this)
      )
  }
}
