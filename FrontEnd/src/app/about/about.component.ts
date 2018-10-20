import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundImage = "url('assets/aboutBG.jpg')";
  }

  ngOnInit() {
  }

}