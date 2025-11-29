import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course',
   standalone: true,
  imports: [RouterModule ,FormsModule],
  templateUrl: './course.html',
  styleUrls: ['./course.css'],
})
export class Course {

}
