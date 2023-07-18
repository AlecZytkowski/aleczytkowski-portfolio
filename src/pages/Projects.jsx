import './Projects.css'
import { ProjectCard } from '../components/ProjectCard'

export const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1>What I've been working on</h1>
            {/*Look up how to deploy a react app to github pages*/}
            <div className='project-cards'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>
        </div>
    )
}