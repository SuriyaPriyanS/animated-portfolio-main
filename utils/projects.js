const projects = {
    heading: `Things I've Worked on`,
    list: [
        {
            image: '/assets/projects/PIAIC.png',
            label: 'Featured Project',
            title: 'Event Management System',
            description: 'CRM BasedDeveloped and maintained a comprehensive CRM-based Event Management System over the course of 1 year, focusing on automation, lead tracking, and event lifecycle management. Integrated Datafault and Inbound Marketing strategies to streamline attendee engagement, campaign tracking, and data-driven decision-making.',
            techs: [
                'React Js',
                'Express Js',
                'Next Js',
                'Node Js',
                'Mongodb',
            ],
            links: {
               // live: 'https://your-event-management-system.com', // Replace with actual URL
                //github: 'https://github.com/yourusername/event-management-system', // Replace with actual repo
            }
        },
        {
            image: '/assets/projects/digitalplattform.png',
            label: 'Featured Project',
            title: 'Digital Marketing Platform',
            description: 'Designed and developed an admin panel for a Content Management System (CMS) digital marketing platform, enabling administrators to efficiently manage content such as images, menus, pages, and templates for events, trade shows, and virtual booths. The admin panel provides a streamlined interface with features like page creation, media library management, content type configuration, and template selection.',
            techs: [
                'React Js',
                'Express Js',
                'Next Js',
                'Mongodb',
            ],
            links: {
                live: 'https://alpha-proadmin.cromapages.com/', // Replace with actual URL
                // github: 'https://github.com/yourusername/digital-marketing-platform', // Replace with actual repo
            }
        },
        {
            image: '/assets/projects/declinica.png',
            label: 'Featured Project',
            title: 'Digital Marketing Platform',
            description: 'A Decentralised blockchain Designed for the medical community.',
            techs: [
                'React Js',
                'Web3 Js',
            ],
            links: {
                live: 'https://alpha-app.cromapages.com', // Replace with actual URL
                //github: 'https://github.com/yourusername/declinica', // Replace with actual repo
            }
        },
        {
            image: '/assets/projects/rolazdoro.png',
            label: 'Featured Project',
            title: `Rolaz D'oro`,
            description: `One of the main objective of Rolaz D'ORO is to make gold easily accessible to even small investors in a trusted and secure environment, with the peace of mind that their investments are traceable and could be claimed at any stated time.`,
            techs: [
                'React Js',
                'Web3 Js',
                'Node Js',
                'Express Js'
            ],
            links: {
                live: 'https://cryptocurrency11.netlify.app', // Replace with actual URL
                //github: 'https://github.com/yourusername/rolazdoro', // Replace with actual repo
            }
        },
        {
            image: '/assets/projects/chainracers.png',
            label: 'Featured Project',
            title: `Learning Platform System`,
            description: `Designed and developed a scalable full-stack Learning Management System (LMS) to facilitate seamless course delivery and user engagement. Key functionalities include dynamic course management, secure user authentication, and real-time progress tracking. Improved content delivery methods to enhance the overall learning experience.`,
            techs: [
                'React Js',
                'Node Js',
                'Express Js',
                'Mongodb'
            ],
            links: {
                live: 'https://your-learning-platform.com', // Replace with actual URL
                //github: 'https://github.com/yourusername/learning-platform', // Replace with actual repo
            }
        }
    ]
}

// Helper function to handle link clicks
export const openProjectLink = (url) => {
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

export default projects
