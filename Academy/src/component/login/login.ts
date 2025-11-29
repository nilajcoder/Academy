import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
   standalone: true,
  imports: [RouterModule,CommonModule ,FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

    username: string = '';
    password: string = '';

    onLogin() {
        console.log("Username:", this.username);
        console.log("Password:", this.password);
    }

}
