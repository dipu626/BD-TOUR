import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ngxBootstrapComponents = [
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule
]


@NgModule({
  imports: [ngxBootstrapComponents],
  exports: [ngxBootstrapComponents]
})
export class NgxBootstrapModule { }
