import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;

  constructor(
    private router : Router,
    private apiService : ApiserviceService
  ) { }

  ngOnInit(): void {
  }

  login(){
    var dbusername;
    var dbpass;

    this.username = document.getElementsByTagName('input')[0].value;
    this.password = document.getElementsByTagName('input')[1].value;

    console.log(this.username,this.password);

    const res = this.apiService.getData('login/farmerlogin/'+this.username);
    res.subscribe(results =>{
      console.log(results.data);
      dbusername = results.data[0]['mobile_number'];
      dbpass = results.data[0]['password'];
      console.log(dbusername,dbpass);
      if(this.username == dbusername && this.password == dbpass){
        localStorage.setItem('name',results.data[0]['name'])
        this.router.navigateByUrl('home');
      }else{
        alert('Wrong Username or Password');
      }
    })

    //this.router.navigateByUrl('home');
  }
  register(){
    this.router.navigateByUrl('register');
  }

}
