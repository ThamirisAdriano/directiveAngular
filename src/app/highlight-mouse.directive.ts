import { Directive , HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

}
