import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  formdata;
  Id:String []=[];
  Name:String []=[];
  userArray=[];
  constructor() { }
  
  ngOnInit() {
  }
  
  onClickSubmit(formdata){
    alert("inside"+JSON.stringify(formdata))
    console.log("Employee Id"+formdata.Id+" Employee Name"+formdata.Name);

this.userArray.push(formdata);
alert("this.userArray--"+JSON.stringify(this.userArray))
  this.Id.push(formdata.Id);
  this.Name.push(formdata.Name);
  console.log("below is the emply list");
  
  for(var i=0 ;i<this.Id.length;i++){
  console.log(this.Id[i]+""+this.Name[i]);
  document.getElementById("data").innerHTML= formdata.Id +" you  successfully added." ;
  }
  }
}
