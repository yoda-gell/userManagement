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
  data:any={}

  ngOnInit():void {
    // this.obj = this.http.get("http://127.0.0.1:8000/client/add/").subscribe(data => this.obj = data)
  }

 
onSubmit()
   {
    this.obj = this.http.post("http://127.0.0.1:8000/client/add/",this.data).subscribe(data => this.obj = data)
      alert(this.data);
  }
}
