import { animate, query, style, transition, trigger, group } from '@angular/animations';


export const routerAnimation = trigger('routerAnimation', [
  transition('1 => 2', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      //
    ),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(-100%)' }))
      ]),
    ])
  ]),
  transition('2 => 1', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
    ),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(100%)' }))
      ]),
    ])
  ]),
  transition('2 => 3', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      //
    ),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(-100%)' }))
      ]),
    ])
  ]),
  transition('3 => 2', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
    ),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(100%)' }))
      ]),
    ])
  ]),
  transition('3 => 4', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      //
    ),
    group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(-100%)' }))
      ]),
    ])
  ]),
  transition('4 => 3', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
    ),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateY(100%)' }))
      ]),
    ])
  ])
]);


