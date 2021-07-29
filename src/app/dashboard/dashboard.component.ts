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
  // userEvents for drag and drop
  userEvents:any;
  user:any;
  number: any;
  todos:any;

  // form validation with formbuilder validators
  todoForm= this.fb.group({
    todos:['', [Validators.required, Validators.pattern('[a-z A-Z 0-9]*')]]
  })

  constructor(private router:Router, private dataService:DataService, private fb:FormBuilder) {
   
   }

  ngOnInit(): void {
    this.displayTodo()
  }

  // display todos

  displayTodo(){
    this.user=localStorage.getItem("name");
    this.number = localStorage.getItem("number");
    this.dataService.displayTodo(this.number) // display todos in frontend
    .subscribe((result:any)=>{
      if(result){
        this.userEvents=result.data
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }

  // add todos to api 
  addTodo(){
    let todo = this.todoForm.value.todos;
    if(this.todoForm.valid){
      this.dataService.addTodo(todo,this.number)
      .subscribe((result:any)=>{
        if(result){
          this.userEvents=result.data
          this.todos = ""
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
  }

// logout session
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login')
  }

  // dragdrop event
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userEvents, event.previousIndex, event.currentIndex);
  }

  // dltTodo(todos){
  //   var number=localStorage.getItem("number");
   
  //   this.dataService.dltTodo(number,todos)
  //   .subscribe((result:any)=>{
  //     if(result){
  //       alert(result.message)
  //       location.reload();
  //     }
  //   },
  //   (result)=>{
  //     alert(result.error.message)
  //   })
  // }

}
