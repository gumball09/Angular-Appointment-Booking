import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from ''

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  // get the base url defined in environment
  private BASE_URL = environment.API_URL

  // inject HTTP module into the appointment service
  constructor(private http: HttpClient) { }
}
