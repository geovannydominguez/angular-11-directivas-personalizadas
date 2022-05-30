import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]' // nombre de la directiva para indicar a Angular. Este nombre no debe existir
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  // Para acceder a estas propiedades dentro de esta clase, es necesario crearlas.
  // Abajo en el setter '@Input() set color' no podemos acceder al valor de estas propiedades porque es un setter.
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  // Este Input se va a ejecutar si y solo si cambia la propiedad asociada, en este caso
  // solo si cambia la propiedad 'color'.
  //
  // Además del @Input(), este es un setter.
  // Cada vez que el color cambie, se va a ejecutar el setColor().
  // IMPORTANTE. Aquí no estamos manteniendo el valor de 'color' y si queremos este valor,
  // tenemos que crear alguna propiedad privada, por ejemplo: _color
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  // Este Input setter se va a ejecutar, si y solo si, cambia la propiedad asociada, en este caso
  // solo si cambia la propiedad 'mensaje'.
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    if (valor) {
      // Agregar mi clase hidden. Ver style.css
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  // Inyectar un ElementRef
  constructor(private el: ElementRef<HTMLElement>) {

    // Mantener una referencia al ElementRef
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if ( changes.mensaje ) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if ( changes.color ) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes)

  }

  ngOnInit(): void {

    // Las propiedades son undefined cuando vienen del Componente Padre, del Input().
    // console.log(this.color); // undefined
    // console.log(this.mensaje); // undefined

    // Para establecer la información correcta por default, no con los valores que vienen del Input(), 
    // sino con los valores que tenemos en nuestras propiedades privadas de esta clase.
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    // Aquí utiliza el valor de la propiedad del Input() setter.
    //this.htmlElement.nativeElement.style.color = this.color;

    // Aquí utliza el valor de la propiedad privada de esta clase
    this.htmlElement.nativeElement.style.color = this._color;

  }

  setMensaje(): void {
    // Aquí utiliza el valor de la propiedad del Input() setter.
    //this.htmlElement.nativeElement.innerText = this.mensaje;

    // Aquí utliza el valor de la propiedad privada de esta clase
    this.htmlElement.nativeElement.innerText = this._mensaje;

  }

}
