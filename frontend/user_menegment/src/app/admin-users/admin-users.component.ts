import { Component,OnInit,SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  constructor(private http: HttpClient , private router: Router ) {
    
  }
  
  obj:any;
  tempObj: any;
  search =""
  
  addItem(newItem: string) {
    this.search =newItem;
    console.log(this.search);
    this.fetch()
  }

  fetch(){
    this.http.get("http://127.0.0.1:8000/client/all/").subscribe(data => {
      this.obj = data
      this.tempObj = this.obj.filter((o: any )=> {
        console.log(o.first_name)
        console.log(typeof o.first_name);
        
        return o.first_name.includes(this.search)

      })
    })
  }

  ngOnInit():void {
    this.fetch()
    
    
  }
  deleteUser(id: number) {
    
    this.http.delete(`http://127.0.0.1:8000/client/delete/${id}/`).subscribe(
      (response) => {
        console.log(`User with ID ${id} deleted successfully.`, response);
        this.fetch()
      },
      (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      }
    );
  }

  openUser(id:number){
    this.router.navigate([`/user-details/${id}`]);
  }
  
  
  ngOnChanges(change:any) {
  }
  
}
