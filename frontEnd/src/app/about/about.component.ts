import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value:string = "Dipu";

  onClick(event) {
    this.value = event.value;
    //console.log(this.value);
  }

  childExists:boolean = true;
  onDestroy() {
    this.childExists = false;
  }

}
