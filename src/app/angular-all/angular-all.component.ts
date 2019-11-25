import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-all',
  templateUrl: './angular-all.component.html',
  styleUrls: ['./angular-all.component.css']
})
export class AngularAllComponent implements OnInit {
  public myVariable = 'myName';
  public bitWiseOr = 2 | 5;
  public myVariableOne = "myname";
  public myname = "subramanyam";
  public something = "Hi budy";
  public ifCase:boolean = true;
  public serverId:number = 10;
  serverStatus:any = 'offline';




  constructor() { 
    // this.myVariableOne = ""
    // setInterval (() => {
    //   this.myVariableOne = Math.random().toString()
    // }, 500)
    // this.serverStatus = Math.random > 0.5 ? 'online' : 'offline'; 
  }

  ngOnInit() {
  }

  // getServerStatus(){
  //   return this.serverStatus;
  // }

  callMyFunction(){
    console.log("success");
  }
  // updateValue(e){
  //   this.myname=e.target.value;
  //   console.log(e.target.value);
  // }

  records = [
    {
      name:"myname",
      college:"svl"
    },
    {
      actor:"mahesh"
    }
  ]
  updateName(){
    this.something = "complected";
  }

  ifCaseWork(){
    this.ifCase = false;
  }

  onUpdate(event:any){
   console.log("s");
  }

}
