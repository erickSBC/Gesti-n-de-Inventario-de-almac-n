import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder,
              private router: Router){}
  form!: FormGroup; 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],  
      lastname: ['', Validators.required],  
      email: ['', Validators.required],  
      password: ['', [Validators.required, Validators.minLength(3)]],
      telephone: ['', [Validators.required]],
      roleSelector: ['Operario', Validators.required]  

    });
  }

  submit(){
    const registroExitoso = true;
    if (!registroExitoso) return;
    switch (this.form.get('roleSelector')?.value) {
      case 'Operario':
        this.router.navigate(['/dashboard']);
        break;
      case 'Supervisor':
        this.router.navigate(['/dashboard']);
        break;
      case 'Administrador':
        this.router.navigate(['/dashboard']);
        break;
    
      default:
        break;
    }
  }
  goLogin(){
    setTimeout(() => {
          this.router.navigate(['/auth/log-in'])

    }, 1000);
  }
}
