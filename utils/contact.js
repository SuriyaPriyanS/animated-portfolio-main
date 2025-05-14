import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let’s Work Together`,
    description: `I’m open for new opportunities – especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:suriyapriyan@0506gmail.com?subject=Hello')
    },
    designAndBuiltBy: 'Designed & Built By Suriya Priyan',
    handleBuiltByClick: () => openLink('https://github.com/SuriyaPriyanS')
}

export default contact
