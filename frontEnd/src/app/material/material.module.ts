import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatIcon, MatIconModule} from '@angular/material/icon';

import {ReactiveFormsModule} from '@angular/forms';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule, 
  MatTableModule,
  ReactiveFormsModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
