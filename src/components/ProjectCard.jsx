import './ProjectCard.css'
import { SocialIcon } from 'react-social-icons';

export const ProjectCard = ({ project }) => {

    const handleLinkClick = () => {
        window.open(project.websiteUrl, '_blank');
    };

    return(
        <div className='project-card'>
            <div onClick={handleLinkClick}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
            <div>
                <ul className="social-links">
                    <li>
                        <SocialIcon url={project.githubUrl} bgColor='black' />
                    </li>
                </ul>
            </div>
        </div>
    )
}