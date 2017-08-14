import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OurmembersComponent } from './ourmembers/ourmembers.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ])
  });
  
  constructor() {
   }

  contactformsubmmit(){
    var contactdetails = this.contactform.value;
    console.log(contactdetails);
    this.contactform.markAsPristine;

  }
  ngOnInit() {
  }
  @Input() users:OurmembersComponent;
}
