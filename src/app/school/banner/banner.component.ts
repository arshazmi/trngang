import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-school',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  content='Course';
  @Input() item = ''; 
  constructor() { }

  ngOnInit(): void {
  }

 
}
