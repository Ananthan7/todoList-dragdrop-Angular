import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  posts: any = []
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.displaySpinner()
  }
  displaySpinner(){
    this.dataService.displaySpinner()
      .subscribe((result:any)=>{
        if(result){
          this.posts=result
          console.log(this.posts);
          
        }
      },
      (result)=>{
        alert(result.error.message)
      })
  }

}
