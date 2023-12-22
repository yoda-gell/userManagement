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
  pay=1
  needtopay =1
 constructor(private http: HttpClient){}
fetch(){
  this.http.get(`http://127.0.0.1:8000/client/find/${sessionStorage.getItem('id')}/`).subscribe(
    (data: any) => {
      this.obj = data;
      console.log(this.obj.money);
      
      this.pay += this.obj.money
      this.needtopay += this.obj.moneyneed
      this.createChart()

    },
    (error: any) => {
      console.error('Error fetching user data:', error);
    }
  );
}
 ngOnInit(): void {
this.fetch()
}
  obj:any


  createChart(){

    
    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {
        labels: ['payed','need to pay', ],
	       datasets: [{
    data: [this.pay, this.needtopay],
    backgroundColor: ['blue', 'red',],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
