import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
   standalone: true,
  imports: [RouterModule ,CommonModule, FormsModule ],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {


  fullname: string = '';
    email: string = '';
    username: string = '';
    password: string = '';

    onRegister() {
        console.log("Full Name:", this.fullname);
        console.log("Email:", this.email);
        console.log("Username:", this.username);
        console.log("Password:", this.password);
    }

}
