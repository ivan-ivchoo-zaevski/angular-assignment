import { trigger, state, style, transition, animate } from '@angular/animations';

export const fade = trigger('fade', [
  state('hide', style({
    opacity: 0,
  })),
  state('show', style({
    opacity: 1,
  })),
  transition('hide <=> show', animate('200ms ease-in')),
]);
