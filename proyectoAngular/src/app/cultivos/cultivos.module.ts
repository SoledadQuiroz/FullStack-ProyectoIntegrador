import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CultivoComponent } from './cultivo/cultivo.component';



@NgModule({
  declarations: [
    CultivoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CultivoComponent
  ]
})
export class CultivosModule { }
