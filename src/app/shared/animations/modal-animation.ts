import { createAnimation } from '@ionic/core';


export const modalEnterAnimation = () => createAnimation()
    .addElement(document.querySelector('.modal-wrapper'))
    .duration(500)
    .fromTo('transform', 'translateY(0%)', 'translateY(0%)')
    .fromTo('opacity', '0', '0.99');  //add any animation here

export const modalLeaveAnimation = () => createAnimation()
    .addElement(document.querySelector('.modal-wrapper'))
    .duration(500)
    // .fromTo('transform', 'translateX(0%)', 'translateX(150%)')
    .fromTo('opacity', '0.99', '0');

