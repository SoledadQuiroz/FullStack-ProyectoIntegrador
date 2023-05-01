import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CultivoComponent } from './cultivo/cultivo.component';
import { JardinComponent } from './jardin/jardin.component';



@NgModule({
  declarations: [
    CultivoComponent,
    JardinComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CultivoComponent,
    JardinComponent
  ]
})
export class CultivosModule { }
