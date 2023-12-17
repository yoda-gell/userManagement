import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(private http: HttpClient) {
    
  }

  obj:any;

  ngOnInit():void {
    this.obj = this.http.get("http://127.0.0.1:8000/client/all/").subscribe(data => this.obj = data)
  }

pass: any;
  name()
   {
    var input = document.getElementById("userInput");
    alert(input);
  }
}
