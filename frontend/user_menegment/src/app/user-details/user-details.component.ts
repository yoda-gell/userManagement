import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  obj: any;
  id: number | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // Convert the id to a number
      this.fetchUserData();
    });
  }

  fetchUserData() {
    this.http.get(`http://127.0.0.1:8000/client/${this.id}`).subscribe(
      (data: any) => {
        this.obj = data;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}