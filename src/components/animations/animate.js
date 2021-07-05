import gsap from 'gsap';
// import  {ScrollTrigger} from 'gsap/ScrollTrigger'

//  https://www.smashingmagazine.com/2020/09/animating-react-components-greensock/


export const intro_text_container = elem => {
    gsap.from(elem,{
        xPercent: -10,
        opacity: 0,
        stagger: 0,
        duration: 2,
        scale: 0,
        ease: "back",
    })
}
