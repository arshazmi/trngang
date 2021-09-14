import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    this._router.navigate(['/'])
    localStorage.removeItem('token')
  }

}
