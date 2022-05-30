import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  exports: [
    // Estas directivas van a ser utilizadas en otro módulo (Producto). Debo exportar.
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
