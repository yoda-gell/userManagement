import {Component,OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-missions',
  templateUrl: './add-missions.component.html',
  styleUrls: ['./add-missions.component.css']
})
export class AddMissionsComponent implements OnInit {
 
  constructor(private http: HttpClient) {
    
  }
  @Input() id ="" ;
  @Input() status =false ;
  obj:any = {
    "assign_to":this.id
  };
 
 
  ngOnInit():void {
  }

  fetchUserData() {   
    this.obj.assign_to = this.id
    this.obj += this.http.post("http://127.0.0.1:8000/mission/add/",this.obj).subscribe((data) =>{this.obj = data,
    alert("the mission add to the missions");
  })
  }
 
onSubmit(){
    this.fetchUserData()
  }

clickEvent(){
    this.status = !this.status;       
}

}