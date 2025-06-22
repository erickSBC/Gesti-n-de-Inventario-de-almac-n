import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private formBuilder: FormBuilder,
              private router: Router){}
  form!: FormGroup; 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],  
      password: ['', [Validators.required, Validators.minLength(3)]],
      roleSelector: ['Operario', Validators.required]  

    });
  }

  submit(){
    const loginExitoso = true;
    if (!loginExitoso) return;
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
  create(){
    setTimeout(() => {
          this.router.navigate(['/auth/sign-up'])
    }, 1000);
  }
}
