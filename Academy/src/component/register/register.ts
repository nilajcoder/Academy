import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
     MatIconModule


   ],
   
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {


  fullname: string = '';
    email: string = '';
    mobile: string = '';
    password: string = '';

    onRegister() {
        console.log("Full Name:", this.fullname);
        console.log("Email:", this.email);
        console.log("Username:", this.mobile);
        console.log("Password:", this.password);
    }

}
