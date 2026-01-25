import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-register',
  imports: [
    RouterModule ,
    CommonModule,
     FormsModule,
     MatFormFieldModule,
     
     MatInputModule,
     MatIconModule ,
      ReactiveFormsModule,
      MatSelectModule


   ],
   
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

  
   financialYears = [
  { id: 1, caption: '2022–2023' },
  { id: 2, caption: '2023–2024' },
  { id: 3, caption: '2024–2025' },
  { id: 4, caption: '2025–2026' }
];
    detailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      otherBank:['sbi'],
      interestRate:[Validators.required],
      sanction:['',Validators.required],
      premium:[]
      

    });


    
  }


  calculatepremium() {
    const amount = this.detailForm.get('sanction')?.value;
    const premium = amount * 0.05;
    this.detailForm.get('premium')?.setValue(premium);
  }
}