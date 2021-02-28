import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  addItems(){
    this.route.navigateByUrl('/industryform');
  }
}
