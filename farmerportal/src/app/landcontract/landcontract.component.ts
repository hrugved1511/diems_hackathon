import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landcontract',
  templateUrl: './landcontract.component.html',
  styleUrls: ['./landcontract.component.css']
})
export class LandcontractComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  landingRenting(){
    this.route.navigateByUrl('/landrenting');
  }

  landFarming(){
    this.route.navigateByUrl('/landfarming');
  }

}
