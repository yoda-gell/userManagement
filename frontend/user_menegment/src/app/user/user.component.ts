import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  public chart: any;

 constructor(private http: HttpClient){}
fetch(){
  this.http.get(`http://127.0.0.1:8000/client/find/${sessionStorage.getItem('id')}/`).subscribe(
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
this.createChart()
}
  obj:any


  createChart(){

    
    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {
        labels: ['payed','need to pay', ],
	       datasets: [{
    data: [3,  3],
    backgroundColor: [ 'red','blue',],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
