import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.css']
})
export class AboutChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  constructor() { 
    console.log("Constructor called");
  }

  @Input() myValue:string = "Child Component";
  counter:any;
  increament:number = 1;
  
  ngOnInit(): void {
    console.log("ngOnInit called");
    this.counter = setInterval(() => {
      console.log(this.increament);
      this.increament += 1;
      
    }, 1000);  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes.myValue.currentValue + " " + changes.myValue.previousValue);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit called");
    
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy called");
    clearInterval(this.counter);
  }

}
