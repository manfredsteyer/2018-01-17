import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    
    userName: string;

    login() {
        this.userName = 'Max';
    }

    logout() {
        this.userName = null;
    }
    
    constructor() { }

}