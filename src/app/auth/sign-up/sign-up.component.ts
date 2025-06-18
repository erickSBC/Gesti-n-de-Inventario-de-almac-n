import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder){}
  form!: FormGroup; 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],  
      password: ['', [Validators.required, Validators.minLength(3)]],
      roleSelector: ['Operario', Validators.required]  

    });
  }

  submit(){

  }
}
