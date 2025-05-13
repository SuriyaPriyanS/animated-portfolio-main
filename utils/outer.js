import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Suriya Priyan',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        
        
        'A Web Developer',
        'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 1 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:suriyapriyan0506@gmail.com?subject=Hello')
    }
}

export default outer
