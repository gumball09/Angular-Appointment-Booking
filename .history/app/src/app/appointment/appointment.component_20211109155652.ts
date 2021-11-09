import { Component, OnInit } from '@angular/core';
import { AppointmentServiceService } from '../appointment-service.service'
import { Appointment } from '../../model/Appointment'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  
  // variables in form
  public appointmentDate: string;
  public name: string;
  public email: string;

  constructor(private apptService : AppointmentServiceService) { }

  ngOnInit() : void {}

  createAppointment() {
    this.successMsg = "";
    this.errorMsg = "";
    
    this.apptService
      .createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe((createdAppt : Appointment) => {
        this.appointmentDate = "";
        thi
      })
  }
}