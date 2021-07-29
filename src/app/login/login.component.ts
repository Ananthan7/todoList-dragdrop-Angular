import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login form validation with formbuilder validators
  loginForm= this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })
  constructor(private router:Router, private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  // login using backend
  login(){
    let phone = this.loginForm.value.phone;
    let pswd = this.loginForm.value.pswd;

    if(this.loginForm.valid){
      this.dataService.login(phone,pswd)
      .subscribe((result:any)=>{
        if(result){
          // alert(result.message)
          localStorage.setItem("name", result.name)
          localStorage.setItem("number", result.number)
          this.router.navigateByUrl('dashboard')
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
  }
}
