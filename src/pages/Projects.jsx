import './Projects.css'
import { ProjectCard } from '../components/ProjectCard'

export const Projects = () => {

    return (
        <div className='projects' id='projects'>
            <h1>What I've been working on</h1>
            {/*Look up how to deploy a react app to github pages*/}
            <div className='project-cards'>
            <ProjectCard project={{ name: 'PlanPulse | ⚠ Under Construction ⚠', description: `PlanPulse is a robust full-stack web application designed for efficient event and task management. It features a dynamic calendar view, user-friendly event creation, and personalized user profiles. With a secure authentication system, PlanPulse streamlines organization and boosts productivity. The intuitive front-end and powerful back-end combine to empower users in scheduling and planning. The calendar view facilitates easy month-to-month navigation, event exploration, and seamless daily planning, making it a valuable tool for effective time management.`, websiteUrl: 'https://github.com/AlecZytkowski/plan_pulse', githubUrl:'https://github.com/AlecZytkowski/plan_pulse'}}/>
            <ProjectCard project={{ name: 'Calcu-Finance', description: 'A dynamic ReactJS project featuring a Home Mortgage, and an Auto Loan calculator all in one! This project was focused on stengthening skills in ReactJS by utilizing useState, while enabling real-time, user-triggered calculations. Empowering users to make quick, and informed financial decisions through interactive interfaces.', websiteUrl: 'https://aleczytkowski.github.io/calcu-finance/', githubUrl:'https://github.com/AlecZytkowski/calcu-finance'}}/>
            <ProjectCard project={{ name: 'ShopATM', description: 'Shop ATM is a front-end e-commerce project that demonstrates web development skills, and knowledge in ReactJS. Users can browse a variety of different products, add items to their cart, and view the total cost. The site features a responsive design and smooth interactions for a seamless shopping experience.', websiteUrl: 'https://aleczytkowski.github.io/shopatm/', githubUrl:'https://github.com/AlecZytkowski/shopatm'}}/>
            <ProjectCard project={{ name: 'Trackify', description: 'Trackify is a React-based task tracking app that simplifies your to-do list management. With Trackify, you can effortlessly input tasks, add them to your list, mark them as completed, and easily clear completed tasks, helping you stay organized and on top of your daily goals.', websiteUrl: 'https://aleczytkowski.github.io/Trackify/', githubUrl:'https://github.com/AlecZytkowski/Trackify'}}/>
            <ProjectCard project={{ name: 'QuikTip', description: 'QuikTip: Your on-the-go solution for lightning-fast bill calculations. This website, built with HTML/CSS and vanilla JavaScript, simplifies tip calculations, making it a breeze to calculate your gratituity or split the check effortlessly. No more mental math; just quick tips!', websiteUrl: 'https://quiktip.netlify.app/', githubUrl:'https://github.com/AlecZytkowski/QuikTip'}}/>
            </div>
        </div>
    )
}