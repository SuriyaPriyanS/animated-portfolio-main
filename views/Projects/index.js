import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle'
import { openProjectLink } from '../../utils/projects'

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='ai-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const ProjectLinks = ({ links, side }) => {
    if (!links) return null;
    
    return (
        <div 
            data-aos={`zoom-in-${side}`}
            className='ai-projects-links'
        >
            {links.live && (
                <button 
                    className='ai-project-link-btn ai-project-link-live'
                    onClick={() => openProjectLink(links.live)}
                    aria-label="View live project"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Live Demo
                </button>
            )}
            {links.github && (
                <button 
                    className='ai-project-link-btn ai-project-link-github'
                    onClick={() => openProjectLink(links.github)}
                    aria-label="View source code"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    Source Code
                </button>
            )}
        </div>
    )
}

const SingleProject = (props) => {
    const { image, index } = props
    const side = getSide(index);
    return (
        <div className='ai-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className=''>
                        <WindowScreen containerClassName={`ai-projects-image-container ai-projects-image-container-${side}`}>
                            <WindowImage src={image} />
                        </WindowScreen>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image, links } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`ai-projects-text-side ai-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-featured'>{label}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-title'>{title}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`ai-text-image-container`}>
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-tecs'>
                {techs && techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
            <ProjectLinks links={links} side={side} />
        </div>
    )
}

const Projects = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ai-projects'>
            <div className='container'>
                <div className='ai-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {
    data: PropTypes.shape({
        heading: PropTypes.string,
        list: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string,
            label: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            techs: PropTypes.arrayOf(PropTypes.string),
            links: PropTypes.shape({
                live: PropTypes.string,
                github: PropTypes.string
            })
        }))
    })
}

export default Projects
