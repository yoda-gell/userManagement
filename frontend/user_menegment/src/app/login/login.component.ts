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
        console.log("Login successful",response ); 
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  }
}
