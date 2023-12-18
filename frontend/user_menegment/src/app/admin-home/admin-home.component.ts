import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(private http: HttpClient) {
    
  }
  
  obj:any;

  ngOnInit():void {
    this.obj = this.http.get("http://127.0.0.1:8000/client/all/").subscribe(data => this.obj = data)
  }
}
