import React from 'react'
import PropTypes from 'prop-types'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle'
import Helm from '../../components/SVGs/Helm'
import { useParallax } from 'react-scroll-parallax'

// Bootstrap Icons as React components
const BootstrapIcon = ({ icon, className = '' }) => (
  <i className={`bi bi-${icon} ${className}`}></i>
);

const Paragraph = ({ text }) => (
    <div data-aos="zoom-in-left" className='ai-myself-paragraph'>
        {text}
    </div>
)

const TechItem = ({ tech, icon }) => (
    <div data-aos="zoom-in-left" className='ai-myself-skill'>
        <BootstrapIcon icon={icon} className="tech-icon" />
        <span>{tech}</span>
    </div>
)

const List = ({ items }) => (
    <div className='col'>
        {(items || []).map(item => (
            <TechItem key={item.name} tech={item.name} icon={item.icon} />
        ))}
    </div>
)

const ListParent = ({ list1, list2 }) => (
    <div className='ai-myself-list-parent row'>
        <List items={list1} />
        <List items={list2} />
    </div>
)

const MySelf = ({ data: {
    heading,
    paragraphs,
    techList1,
    techList2,
    image,
} }) => {
    const { ref } = useParallax({
        speed: -20,
        easing: [1, 1.5, 0.5, 2],
        rotate: [0, (360 * 1)],
    });

    // Bootstrap Icons mapping
    const techIcons1 = [
        { name: 'JavaScript', icon: 'filetype-js' },
        {name: 'TypeScript', icon: 'filetype-ts'},
        { name: 'React.js', icon: 'bootstrap' },
        { name: 'Next.js', icon: 'lightning-charge-fill' },
        { name: 'Express.js', icon: 'server' },
        { name: 'Node.js', icon: 'node-plus-fill' },
        { name: 'Firestore', icon: 'database-fill' },
        { name: 'Java', icon: 'filetype-java' },
        { name: 'MongoDB', icon: 'database-fill-gear' }
    ];

    const techIcons2 = [
        { name: 'Cypress', icon: 'bug-fill' },
        { name: 'Jest.js', icon: 'check-circle-fill' },
        { name: 'Render', icon: 'cloud-upload-fill' },
        // { name: 'Jira', icon: 'kanban-fill' },
        { name: 'Bitbucket', icon: 'bucket-fill' },
        { name: 'AWS', icon: 'cloud-fill' }
    ];

    return (
        <div className='ai-myself'>
            <div
                ref={ref}
                className='ai-myself-settings-icon'>
                <Helm />
            </div>
            <div className='container'>
                <div
                    data-aos="fade-down-left"
                    className='ai-myself-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8'>
                            <div className=''>
                                {(paragraphs || []).map((text, i) => (
                                    <Paragraph
                                        key={i}
                                        text={text}
                                    />
                                ))}
                                <ListParent
                                    list1={techIcons1}
                                    list2={techIcons2}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4 mt-5 mt-md-0'>
                            <div
                                data-aos="zoom-in-right"
                                className='ai-myself-profile-wrapper d-flex justify-content-center'>
                                <HoverImage
                                    showFilter
                                    showBorder
                                    imageClassName='ai-myself-profile'
                                    parentClassName='ai-myself-profile-parent'
                                    src={image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

MySelf.propTypes = {}

export default MySelf
