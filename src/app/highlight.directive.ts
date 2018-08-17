import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	
   constructor(private el: ElementRef) {
       //el.nativeElement.style.backgroundColor = 'yellow';
   }

  @Input('appHighlight') highlightColor: string; //importo input, creo la propiedad y bindeo en el html

  @Input() defaultColor : string;

  @HostListener('mouseenter') onMouseEnter() {
  		this.highlight(this.highlightColor || this.defaultColor || 'red');
	}

	@HostListener('mouseleave') onMouseLeave() {
	  this.highlight(null);
	}

	private highlight(color: string) {
	  this.el.nativeElement.style.backgroundColor = color;
	}
}



