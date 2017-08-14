import { Injectable } from '@angular/core';


@Injectable()
export class OurmembersService {
    getMembers(){
        return 'hello This is my first service!!!'
    }
    constructor() { }
}