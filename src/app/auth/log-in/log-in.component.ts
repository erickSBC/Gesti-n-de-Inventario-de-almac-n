import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
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
