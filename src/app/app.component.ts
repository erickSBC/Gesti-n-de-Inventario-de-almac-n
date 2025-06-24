import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private auth: AuthService){}
  logueado(): boolean{
    return this.auth.isAuthenticated();
  }
  title = 'SistemaInventario';
}
