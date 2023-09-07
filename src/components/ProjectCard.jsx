import './ProjectCard.css'
import { SocialIcon } from 'react-social-icons';

export const ProjectCard = ({ project }) => {
return(
        <div className='project-card'>
            <div>
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