import { Injectable } from '@angular/core';
import { environment } from 'sr'

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  private BASE_URL = environment.API_URL
  constructor() { }
}
