import { Directive, ElementRef, HostListener, Input, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  constructor(private el: ElementRef) {
  }

  @Input() textColor:string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.el.nativeElement.style.color);
    this.textColor = this.el.nativeElement.style.color;
    
  }

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor("blue");
  }
  @HostListener('mouseover') mouseOver() {
    this.changeColor('green');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.changeColor(this.textColor);
  }
  
  changeColor(color) {
    this.el.nativeElement.style.color = color;
  }

}
