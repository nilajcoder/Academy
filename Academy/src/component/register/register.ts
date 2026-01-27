import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
 
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
      FontAwesomeModule,
      MatDatepickerModule,
MatNativeDateModule


   ],
   
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register implements OnInit {
  

  
  // Static loan type list
loanTypeList = [
{ loanType: 'Home Loan' },
{ loanType: 'Personal Loan' },
{ loanType: 'Car Loan' },
{ loanType: 'Education Loan' },
{ loanType: 'Business Loan' }
];

today = new Date();
maxDobDate = new Date(
this.today.getFullYear() - 18,
this.today.getMonth(),
this.today.getDate()
);

minDobDate = new Date(
this.today.getFullYear() - 100,
this.today.getMonth(),
this.today.getDate()
);

    imageFile!:File
    detailForm: FormGroup;
    faFileLines = faFileLines; 
  constructor(private fb: FormBuilder,
   
  )
  
   {
    
    this.detailForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      otherBank:['sbi'],
      interestRate:['',Validators.required],
      sanction:['',Validators.required],
      premium:[],
      imagefield:[null],
       sanctionDate: ['', Validators.required],
      closeDate: [''],
      dobDate:['',Validators.required],
      aadharcard:['',Validators.required,
       
        Validators.pattern(/^\d{12}$/)
        // Validators.pattern(/^[0-9]{12}$/)

      ],
      mobileNo:['',Validators.required,
    
        Validators.pattern(/^[6-9][0-9]{9}$/)
      ] ,
      age:[''],
      loanType:['',Validators.required],
      address: ['', [Validators.required]],
      pan: ['',[Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)]],
      vote: ['',[Validators.required,Validators.pattern(/^[A-Z]{3}[0-9]{7}$/)]],
      pin: ['',[Validators.required,Validators.pattern(/^[1-9][0-9]{5}$/)]]

    });

    


    
   }

   ngOnInit(): void {
    this.detailForm.get('otherBank')?.disable();

   }

  


// calculateAge(): void {
//   const dob = this.detailForm.get('dobDate')?.value;
//   if (!dob) return this.detailForm.get('age')?.setValue('');

//   const age =
//     new Date().getFullYear() - new Date(dob).getFullYear();

//   this.detailForm.get('age')?.setValue(age);
// }



calculateAge() {
  const dob = this.detailForm.get('dobDate')?.value;
  if (!dob) {
    this.detailForm.get('age')?.setValue('');
    return;
  }

  const birth = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  // যদি জন্মদিন এখনও আসেনি এই বছর
  if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
    years--;
    months += 12;
  }

  const age = Number(`${years}.${months}`);
  this.detailForm.get('age')?.setValue(age);
}

  calculatepremium() {
    const amount = this.detailForm.get('sanction')?.value;
    const premium = amount * 0.05;
    this.detailForm.get('premium')?.setValue(premium);
  }

  disableTyping(event: KeyboardEvent): void {
event.preventDefault(); // Prevents typing or pasting
}



disableTypingPaste(event: ClipboardEvent): void {
event.preventDefault(); // Blocks paste
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

