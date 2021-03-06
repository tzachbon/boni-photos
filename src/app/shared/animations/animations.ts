import { trigger, state, style, transition, animate } from '@angular/animations';



export function slide(
  side: 'X' | 'Y' | '',
  distance = '100vh',
  time = '0.3s',
  name?: string,
  distanceBack = '0'
) {
  return (
    (trigger(name || `slide${side}`, [
      state('true', style({
        transform: `translate${side}(${distance})`
      })),
      state('false', style({
        transform: `translate${side}(${distanceBack})`
      })),
      transition('false <=> true', animate(`${time}`))
    ]))
  );
}

export function slideTo(
  side: 'X' | 'Y' | '',
  distance = '100vh',
  time = '0.3s',
  name?: string,
  distanceBack = '0'
) {
  return (
    trigger(name || `slide${side}`, [
      state('void', style({
        transform: `translate${side}(${distance})`
      })),
      state('*', style({
        transform: `translate${side}(${distanceBack})`
      })),
      transition(':enter', animate(`${time} ease-in`)),
      transition('* => void', animate(`${time} ease-out`))
    ])
  )
}



const bigCard =
  (trigger('bigCard', [
    state('true', style({
      width: `100rem`,
    })),
    state('false', style({
      width: `40rem`
    })),
    transition('false <=> true', animate(`.3s`))
  ])
  );

const socialMedia =
  (trigger('socialMedia', [
    state('true', style({
      transform: `translate(75%, -40%)`,
      width: ` 30rem`
    })),
    state('false', style({
      transform: `translate(-50%, -50%)`,
      width: `40rem`
    })),
    transition('false <=> true', animate(`.35s`))
  ]));

const abstract =
  (trigger('abstract', [
    state('true', style({
      transform: `translate(184%, -183%)`,
    })),
    state('false', style({
      transform: `translate(-50%, -50%)`,
    })),
    transition('false <=> true', animate(`.5s`))
  ])
  );

export const contactUsAnimations = {
  bigCard,
  socialMedia,
  abstract
}
