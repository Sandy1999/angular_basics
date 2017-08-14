import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OurmembersService } from "./members.service";
@Component({
    selector: 'app-memberdetails',
    templateUrl: 'ourmembers.component.html'
})

export class MemberComponent implements OnInit {
    name: string;
    details:string
    constructor( private route:ActivatedRoute) {
        this.name = route.snapshot.params['name']
     }

    ngOnInit() {
        // this.details = this.memberdetails.getMembers();
     }
}