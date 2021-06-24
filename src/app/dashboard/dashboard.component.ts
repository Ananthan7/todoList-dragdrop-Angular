import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEvents:any;
  user:any;
  todoForm= this.fb.group({
    todos:['', [Validators.required, Validators.pattern('[a-z A-Z 0-9]*')]]
  })
  constructor(private router:Router, private dataService:DataService, private fb:FormBuilder) {
    this.user=localStorage.getItem("name")
    let number = localStorage.getItem("number");

    this.dataService.displayTodo(number)
    .subscribe((result:any)=>{
      if(result){
        this.userEvents=result.message
      }
    },
    (result)=>{
      alert(result.error.message)
    })
   }

  ngOnInit(): void {
  }
  addTodo(){
    let todo = this.todoForm.value.todos;
    let phoneNumber=localStorage.getItem("number")
    if(this.todoForm.valid){
      this.dataService.addTodo(todo,phoneNumber)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
  }
  logout(){
    alert("do you want to logout")
    localStorage.removeItem("name");
    localStorage.removeItem("number");
    this.router.navigateByUrl('login')
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userEvents, event.previousIndex, event.currentIndex);
  }


}
