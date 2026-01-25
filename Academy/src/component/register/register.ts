import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faFileAlt } from '@fortawesome/free-solid-svg-icons';


 import { faFileLines } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-register',
   standalone: true,
  imports: [
    RouterModule ,
    CommonModule,
     FormsModule,
     MatFormFieldModule,
     
     MatInputModule,
     MatIconModule ,
      ReactiveFormsModule,
      MatSelectModule,
      FontAwesomeModule


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

    imageFile!:File
    detailForm: FormGroup;
    faFileLines = faFileLines; 
  constructor(private fb: FormBuilder,
   
  )
  
   {
    
    this.detailForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      otherBank:['sbi'],
      interestRate:[Validators.required],
      sanction:['',Validators.required],
      premium:[],
      imagefield:[null]
      

    });


    
  }


  calculatepremium() {
    const amount = this.detailForm.get('sanction')?.value;
    const premium = amount * 0.05;
    this.detailForm.get('premium')?.setValue(premium);
  }

  

   onSelectedFile(event: Event) {
    var target = event.target as HTMLInputElement;

    this.imageFile = target.files![0];
    console.log(this.imageFile);
    const filetype = this.imageFile.type;
    if (filetype && filetype.startsWith('image/')) {
      alert('This File is Image');
    } else {
      alert('The File not suppoted');
      if (target) {
        target.value = '';
      }
      this.detailForm.get('imagefield')?.setValue('');
      return;
    }

    this.detailForm.get('imagefield')!.setValue(this.imageFile.name);

    // const fileSize = this.detailForm.get('imagefield')?.value;
    const fsize = this.imageFile.size;
    if (fsize > 2000000) {
      alert('File is More Than 2  Mb Not Supported');

      if (target) {
        target.value = '';
      }
      this.detailForm.get('imagefield')?.setValue('');
    } else {
      alert('File is Supported');
    }

    console.log(fsize);
}
}