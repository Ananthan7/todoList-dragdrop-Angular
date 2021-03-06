import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form validation with formbuilder validators
  registerForm= this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    uname:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private dataService:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // register using backend
  register(){

    if(this.registerForm.valid){
      
      let phone=this.registerForm.value.phone;
      let uname=this.registerForm.value.uname;
      let pswd=this.registerForm.value.pswd;

      this.dataService.register(phone,uname,pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl('login')
        }
      },
      (result)=>{
        alert(result.error.message)
      })

    }
    else{
      alert("invalid form")
    }
    
  }

}
