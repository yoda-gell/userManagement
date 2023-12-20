import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  obj: any;
  data: any = {};

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post("http://127.0.0.1:8000/login/", this.data).subscribe(
      (response) => {
             
        if (Object.entries(response)[0][1]){
          sessionStorage.setItem('id',Object.entries(response)[1][1]);
          this.router.navigate(['/admin']);
        }
        else{
          sessionStorage.setItem('id',Object.entries(response)[1][1]);
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.error("Login failed", error);
        alert("the email or password is incorrect")
      }
    );

    
      
    
  }
}
