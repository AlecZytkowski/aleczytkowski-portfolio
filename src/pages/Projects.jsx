import './Projects.css'
import { ProjectCard } from '../components/ProjectCard'

const projectList = {
    
}

export const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1>What I've been working on</h1>
            {/*Look up how to deploy a react app to github pages*/}
            <div className='project-cards'>
            <ProjectCard project={{ name: 'ShopATM', description: 'This was a simple test website showcasing the ability to create an e-commerce site for ordering ATMs. Current functionality allows you to browse a selection of different products, and add them to a cart. You can also view you cart and see a total cost of the items.', githubUrl:'https://github.com/AlecZytkowski/ShopATM'}}/>
            <ProjectCard project={{ name: 'Trackify', description: 'Trackify is a React-based task tracking app that simplifies your to-do list management. With Trackify, you can effortlessly input tasks, add them to your list, mark them as completed with a strike-through, and easily clear completed tasks, helping you stay organized and on top of your daily goals.', githubUrl:'https://github.com/AlecZytkowski/Trackify'}}/>
            <ProjectCard project={{ name: 'Calcu-Finance', description: 'A dynamic ReactJS project featuring a Home Mortgage, and an Auto Loan calculator all in one! Strengthening skills in ReactJS by utilizing useState, while enabling real-time, user-triggered calculations. Empowering users to make informed financial decisions through interactive interfaces.', githubUrl:'https://github.com/AlecZytkowski/calcu-finance'}}/>
            <ProjectCard project={{ name: 'QuikTip', description: 'QuikTip: Your on-the-go solution for lightning-fast bill calculations. This minimalist website, built with HTML/CSS and JavaScript, simplifies tip calculations, making it a breeze to express your gratitude or split the check effortlessly. No more mental math; just quick tips!', githubUrl:'https://github.com/AlecZytkowski/QuikTip'}}/>
            </div>
        </div>
    )
}