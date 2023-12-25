import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nev',
  templateUrl: './nev.component.html',
  styleUrls: ['./nev.component.css']
})
export class NevComponent implements OnInit  {
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }
  signup(): void {
    this.router.navigate(['/login']);
  }
  logout(): void {
    sessionStorage.clear()
    this.router.navigate(['']);
  }
}
