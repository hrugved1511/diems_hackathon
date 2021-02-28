import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customercount:any;
  industrycount:any;
  farmercount:any;

  constructor(
    private apiService : ApiserviceService
  ) { 
    const res = apiService.getData('count/customercount');
    res.subscribe(results => {
      console.log(results);
      this.customercount = results.data[0]['count(mobile_number)'];
      console.log(this.customercount)
    })
    const res1 = apiService.getData('count/industrycount');
    res.subscribe(results => {
      console.log(results);
      this.industrycount = results.data[0]['count(mobile_number)'];
      console.log(this.customercount)
    })
    const res2 = apiService.getData('count/farmercount');
    res.subscribe(results => {
      console.log(results);
      this.farmercount = results.data[0]['count(mobile_number)'];
      console.log(this.customercount)
    })
  }

  ngOnInit(): void {
  }


}
