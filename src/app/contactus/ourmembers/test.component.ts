import { Component, OnInit } from '@angular/core';
import { OurmembersService } from "./members.service";
@Component({
    selector: 'app-test',
    template: `<h1>{{title}}</h1>`
})

export class TestComponent implements OnInit {
    title:string;
    
    constructor(private members: OurmembersService) { }

    ngOnInit() {
        this.title = this.members.getMembers();
     }
}