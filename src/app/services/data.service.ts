import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options = {
    withCredentials:true,
  }
  constructor(private http: HttpClient) { }

  register(phoneNumber: any,username: any, password: any) {
    
    const data={
      phoneNumber,
      username,
      password
    }
    return this.http.post('http://localhost:3000/register',data)
  }

  login(phoneNumber: any, password: any) {
    const data={
      phoneNumber,
      password
    }
    return this.http.post('http://localhost:3000/login',data, this.options)
  }

  addTodo(todos:any,phoneNumber:any){
    const data={
      todos,
      phoneNumber
    }
    return this.http.post('http://localhost:3000/addTodo',data, this.options)
  }
  displayTodo(phoneNumber:any){
    console.log(phoneNumber);
    const data={
      phoneNumber
        }
     return this.http.post("http://localhost:3000/displayTodo",data,this.options);
   }
  displaySpinner(){
     return this.http.get("https://jsonplaceholder.typicode.com/photos");
   }

  //  dltTodo(phoneNumber:any,todos:any){
  //   const data={
  //     phoneNumber,
  //     todos
  //       }
  //       return this.http.post("http://localhost:8080/dltEvent/",data,this.options);
  //  }
  
}
