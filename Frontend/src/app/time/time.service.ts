import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

// ✅ POST new time
  postTime() {
    return this.http.post(`${this.apiUrl}/time`, {});
  }

// ✅ GET all times
  getTimes() {
    return this.http.get(`${this.apiUrl}/times`);
  }
}
