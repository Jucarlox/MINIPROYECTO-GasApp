import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  currentPage = 'login';
  constructor() { }
  ngOnInit(): void {
  }
  getPhotoUrl(){
    return localStorage.getItem('photo');
  }
  getName(){
    return localStorage.getItem('name');
  }

}
