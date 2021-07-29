import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phnNumber: boolean =  true;

  constructor(){
    this.checkNumber()
  }

  checkNumber(){
    let number = localStorage.getItem("number");
    if(number){
      this.phnNumber = !this.phnNumber
    }
  }
  title = 'todo-list';
}
