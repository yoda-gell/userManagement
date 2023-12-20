import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-mission',
  templateUrl: './admin-mission.component.html',
  styleUrls: ['./admin-mission.component.css']
})
export class AdminMissionComponent implements OnInit{
 
  constructor(private http: HttpClient, private router: Router ){}
  obj:any
  fetch(){
    this.http.get(`http://127.0.0.1:8000/mission/all/`).subscribe(
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

  goUser(id:number){
    this.router.navigate([`/user-details/${id}`]);
  }
  done(id:number){
    this.http.delete(`http://127.0.0.1:8000/mission/delete/${id}/`).subscribe(
      (response) => {
        console.log(`User with ID ${id} deleted successfully.`,response);
        this.fetch()
      },
      (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      }
    );
  }

}
