import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
 
 constructor(private http: HttpClient){}
fetch(){
  this.http.get(`http://127.0.0.1:8000/client/find/${sessionStorage.getItem('id')}/`).subscribe(
    (data: any) => {
      this.obj = data;
    },
    (error: any) => {
      console.error('Error fetching user data:', error);
    }
  );
}
 ngOnInit(): void {
this.fetch()
}
  obj:any
}
