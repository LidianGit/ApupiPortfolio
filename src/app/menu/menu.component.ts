import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToContactPage() {
        this.router.navigate(['/contact']);
        return false;
    }

    goToProjectDetailsPage(projectId) {
        console.log(projectId);
        this.router.navigate(['/project', projectId]);
        return false;
    }

}
