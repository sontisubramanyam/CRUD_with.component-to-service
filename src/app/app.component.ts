import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
 

  constructor(private router:Router){
  }
  dashboard(){
    this.router.navigateByUrl('/dashboard');
  }
  resources(){
    this.router.navigateByUrl('/resources');
  }
}
