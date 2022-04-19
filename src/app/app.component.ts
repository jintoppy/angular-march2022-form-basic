import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular'
  amount = 10
  person  = {
    name: 'jj',
    age: 10
  }
  time = new Date()
  onFormSubmit(frm: NgForm){
    console.log(frm.value);
  }
}
