import { Directive, Input, HostListener, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[dropFile]'
})
export class DropDirective {
  @Input() onHover: String = '';
  @Input() onLeave: String = '';
  @Output() dropped: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.dropped.emit(evt.dataTransfer.files);
  }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if(this.onHover !== '') {
      this.render.addClass(this.el.nativeElement, this.onHover as string);
    }
    if(this.onLeave !== '') {
      this.render.removeClass(this.el.nativeElement, this.onLeave as string);
    }
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.onHover !== '') {
      this.render.removeClass(this.el.nativeElement, this.onHover as string);
    }
    if (this.onLeave !== '') {
      this.render.addClass(this.el.nativeElement, this.onLeave as string);
    }
  }

}
