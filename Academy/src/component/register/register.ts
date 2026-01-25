import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  imports: [
    RouterModule ,
    CommonModule,
     FormsModule,
     MatFormFieldModule,
     
     MatInputModule,
     MatIconModule ,
      ReactiveFormsModule


   ],
   
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

  

    detailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      otherBank:['sbi']
    });
  }
}