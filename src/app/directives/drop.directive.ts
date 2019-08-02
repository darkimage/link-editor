import { Directive, Input, HostListener, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[dropFile]'
})
export class DropDirective {
  @Input() onHover: String = '';
  @Input() onLeave: String = '';
  @Input() maxFiles: Number = -1;
  @Output() dropped: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.dropped.emit((this.maxFiles === -1) ? evt.dataTransfer.files :  evt.dataTransfer.files[this.maxFiles as number]);
  }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    // console.log(evt);
    if (this.onHover !== '') {
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

  @HostListener('document:mousemove', ['$event']) onGlobalMove(evt) {
    if (!this.el.nativeElement.contains(evt.target)) {
      this.render.removeClass(this.el.nativeElement, this.onHover as string);
    }
  }
}
