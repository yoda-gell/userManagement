import { Component,OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-blance',
  templateUrl: './admin-blance.component.html',
  styleUrls: ['./admin-blance.component.css']
})
export class AdminBlanceComponent implements OnInit {
  public chart: any;
  constructor(private http: HttpClient ) {}
  
  obj:any;
  objSort:any

  allPay=0
  allNeedPay=0

  

   compareByAge(a:any, b:any) {
    return b.moneyneed - a.moneyneed;
  }

  fetch():void {
    this.obj = this.http.get("http://127.0.0.1:8000/client/all/").subscribe(data =>{this.obj = data,
    this.objSort = this.obj.sort(this.compareByAge)

    for (const i of this.obj) {
      this.allPay += i.money,
      this.allNeedPay += i.moneyneed
      console.log(this.allPay);
      console.log(this.allNeedPay);
    }

    this.createChart();
  },)

  }

  createChart(){

    console.log(this.allNeedPay);
    
    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {
        labels: ['payed','need to pay', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [this.allPay,  this.allNeedPay],
    backgroundColor: [ 'red','blue',],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
  
  ngOnInit(): void {
    this.fetch()
  }

}
