import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quantity:any=0;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.route.navigateByUrl('/login');
  }

  increment(){
    this.quantity++
  }
  decrement(){
    if(this.quantity<=0){
      this.quantity=0;
    }
    else{
      this.quantity--;
    }
  }
}
