import { animate, scroll } from "motion"

export function setupParallaxAnimation() {

    const parentEl = document.querySelector('section');

    scroll(animate('.card-image', { y: '20%' }), {
        target: parentEl,
    })
}