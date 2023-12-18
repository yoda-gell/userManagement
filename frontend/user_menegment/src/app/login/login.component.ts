import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.http.post("http://127.0.0.1:8000/login", formData).subscribe(
        (response) => {
          console.log("Login successful", response);
        },
        (error) => {
          console.error("Login failed", error);
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
