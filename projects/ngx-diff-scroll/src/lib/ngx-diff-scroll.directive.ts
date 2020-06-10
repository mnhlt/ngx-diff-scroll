import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { NgxDiffScrollController } from './ngx-diff-scroll.controller';

@Directive({
  selector: '[ngxDiffScroll]'
})
export class NgxDiffScrollDirective implements OnInit{
  @Input() sharedAsyncScroll: string;

  @HostListener('scroll', ['$event'])
  public onScroll(event ) {
    this.asyncScrollController.toScroll(this.sharedAsyncScroll, event.target.scrollTop);
  };

  constructor(
    private asyncScrollController: NgxDiffScrollController,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.asyncScrollController.registerInstance(this);
  }

  toScroll(scroll_top) {
    this.el.nativeElement.scrollTo({ left: 0, top: scroll_top });
  }


}
