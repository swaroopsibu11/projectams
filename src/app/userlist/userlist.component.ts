import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userNames = ["user1", "user2", "user3", "user4"];

  constructor() { }

  ngOnInit() {
  }

  d = new Date();

  entry(event)
  {
    console.log(event);
    alert("Entry time" + this.d);
  }

  exit(event)
  {
    console.log(event);
    alert("Exit time "+this.d);
  }
    
  Delete(event)
  {
    console.log(event);
    alert("Total time "+this.d);

  }
    

}
