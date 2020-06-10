import { Injectable } from '@angular/core';
import { NgxDiffScrollDirective } from './ngx-diff-scroll.directive';

@Injectable({
    providedIn: 'root'
})
export class NgxDiffScrollController {
  private _scrollComponents: Array<NgxDiffScrollDirective> = [];

  constructor() { }

  registerInstance(instance: NgxDiffScrollDirective) {
    this._scrollComponents.push(instance);
  }

  toScroll(scroll_id, scroll_top) {
    this._scrollComponents.filter(item => item.sharedAsyncScroll == scroll_id)
      .forEach(item => {
        item.toScroll(scroll_top);
      });
  }

}
