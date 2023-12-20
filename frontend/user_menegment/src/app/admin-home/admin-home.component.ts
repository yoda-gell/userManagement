import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(private http: HttpClient , private router: Router ) {
    
  }

  









  
  obj:any;

  ngOnInit():void {
    this.obj = this.http.get("http://127.0.0.1:8000/client/all/").subscribe(data => this.obj = data)
  }
  // deleteUser(id: number) {
    
  //   this.http.delete(`http://127.0.0.1:8000/client/delete/${id}/`).subscribe(
  //     (response) => {
  //       console.log(`User with ID ${id} deleted successfully.`, response);
  //     },
  //     (error) => {
  //       console.error(`Error deleting user with ID ${id}:`, error);
  //     }
  //   );
  // }

  // openUser(id:number){
  //   this.router.navigate([`/user-details/${id}`]);
  // }
  // EditUser(id:number){
    
  // }
  
}
