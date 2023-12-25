import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-nev',
  templateUrl: './admin-nev.component.html',
  styleUrls: ['./admin-nev.component.css']
})
export class AdminNevComponent {
  
  constructor(private router: Router){}

  ngOnInit(){
    console.log("sldhflkjh");
    
  }
  logout(): void {
    sessionStorage.clear()
    this.router.navigate(['']);
  }
}
