import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[customIf]' // nombre de la directiva para indicar a Angular. Este nombre no debe existir
})
export class CustomIfDirective {

  // Input() setter
  @Input() set customIf( condicion: boolean ) {
    if ( condicion ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
    } else {
      this.viewContainer.clear();
    }
  }

  // Inyectar un TemplateRef, parecido a un ElementRef.
  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}


}
