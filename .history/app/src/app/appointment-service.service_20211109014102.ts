import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  // get the base url defined in envr
  private BASE_URL = environment.API_URL

  constructor() { }
}
