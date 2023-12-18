import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  obj:any;
  data:any={}

  ngOnInit():void {
    // this.obj = this.http.get("http://127.0.0.1:8000/client/add/").subscribe(data => this.obj = data)
  }

 
onSubmit()
   {
    this.obj = this.http.post("http://127.0.0.1:8000/login/",this.data).subscribe(data => this.obj = data)
      alert(this.data);
  }
}

