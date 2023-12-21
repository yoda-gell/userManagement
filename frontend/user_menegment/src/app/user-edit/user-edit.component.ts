import {Component,OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
 
  constructor(private http: HttpClient) {
    
  }
  @Input() id ="" ;
  UpdateObj:any;
  obj:any={
    "id":this.id
  };
 

  ngOnInit():void {
    this.fetchUserData()
  }

  fetchUserData() {
    this.http.get(`http://127.0.0.1:8000/client/find/${this.id}/`).subscribe(
      (data: any) => {
        this.obj = data;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
 
onSubmit()
   {
    this.UpdateObj = this.http.patch("http://127.0.0.1:8000/client/update/",this.obj).subscribe(data => this.UpdateObj = data)
  }
}