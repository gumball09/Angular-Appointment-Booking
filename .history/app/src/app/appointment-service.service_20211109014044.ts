import { Injectable } from '@angular/core';
import { environment } from '../'

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  private BASE_URL = environment.API_URL
  constructor() { }
}
