import { Component, OnInit, Input,Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ourmembers',
  templateUrl: './ourmembers.component.html',
  styleUrls: ['./ourmembers.component.css']
})
export class OurmembersComponent implements OnInit {
  title = 'Our Team';
  membername: string;
  constructor(private route: ActivatedRoute) {
    this.membername = route.snapshot.params['name'];
  }
  users = [
    {name:'Sanidhya',email:'test@example.com'},
    {name:'Jhon',email:'test@test.com'}
  ];
  ngOnInit() {
    
  }
}

