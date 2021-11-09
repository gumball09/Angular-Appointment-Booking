import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {
  private BASE_URL = environment.BASE_URL
  constructor() { }
}
