import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/SuriyaPriyanS',
        'instagram': '',
        'twitter': '',
        'linkedin': 'https://www.linkedin.com/in/suriya-priyan-ab186721b/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'suriyapriyan0506@gmail.com',
        onClick: () => openLink('mailto:suriyapriyan0506@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements