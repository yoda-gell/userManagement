import { Component, OnInit,Input } from '@angular/core';
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
  mission :any
  currentID =""

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; 
      this.fetchUserData();
      this.currentID =this.id.toString()
    });
  }

  fetchUserData() {
    this.http.get(`http://127.0.0.1:8000/client/find/${this.id}/`).subscribe(
      (data: any) => {
        this.obj = data;
        this.mission= data.missions
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  done(id:number){
    this.http.delete(`http://127.0.0.1:8000/mission/delete/${id}/`).subscribe(
      (response) => {
        console.log(`User with ID ${id} deleted successfully.`,response);
        this.fetchUserData()
      },
      (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      }
    );
  }
}