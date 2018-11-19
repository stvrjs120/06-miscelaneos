import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _el: ElementRef) {
    // _el.nativeElement.style.backgroundColor = "yellow";
  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
    // this._el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
    // this._el.nativeElement.style.backgroundColor = this.nuevoColor;
  }

  private resaltar (color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
