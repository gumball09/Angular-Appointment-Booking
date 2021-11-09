import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public successMsg: string;
  public errorMsg: stirng;
  
  // variables in form
  public appointmentDate: string
  constructor() { }

  ngOnInit(): void {
  }

}
