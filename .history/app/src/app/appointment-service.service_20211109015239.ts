import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Appointment } from '../model/Appointment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  // get the base url defined in environment
  private BASE_URL = environment.API_URL

  // inject HTTP module into the appointment service
  constructor(private http: HttpClient) { }

  // GET REQUEST: GET ALL APPOINTMENTS
  getAppointments() : Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.BASE_URL + '/appointments') 
  }

  // POST REQUEST: CREATE AN APPOINTMENT
  createAppointments(appointmentDate: string, name: string, email: string) : Observable<Appointment> {
    return this.http.post<Appointment>(this.BASE_URL + '/appointments', {
      appointmentDate, name, email 
    })
  }

  // DELETE REQUEST: DELETE EXISTING APPOINTMENT
  cancelAppointment(id: string) {
    this.http.delete(this.BASE_URL + `/appointments/${id}`)
  }
}
