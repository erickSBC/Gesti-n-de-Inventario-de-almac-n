import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://servidor.com/api'; 
  public authenticated: boolean= false;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(loginDto: {email: string, password: string}){
    return this.httpClient.post<{ token: string }>(`${this.apiUrl}/login`, loginDto);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    //return !!localStorage.getItem('token');
    return this.authenticated;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
