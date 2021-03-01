import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  items:any;

  constructor(private route:Router,private apiService : ApiserviceService) {

    var farmer_name = localStorage.getItem('name');

    const res = apiService.getData('farmerproductlist/industrylist/'+farmer_name);
    res.subscribe(results => {
      console.log(results.data);
      this.items = results.data;
    })

   }

  ngOnInit(): void {
  }

  addItems(){
    this.route.navigateByUrl('/industryform');
  }
}
