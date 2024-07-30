import './AboutMe.css'

export const AboutMe = () => {
    return (
        <div className='aboutme' id='about'>
            <div>
            <h1>So, <a href="#about" className='who-link'><i>"Who"</i></a> am I?</h1>
                <a href="#about" className='who-link'>⬇</a>
            </div>
            <p>Welcome to my portfolio website! I'm Alec Zytkowski, a passionate and dedicated junior software engineer specializing in ReactJS, C#, .NET Blazor, along with experience in SQL, VBScript, and a multitude of other languages. I have a knack for crafting elegant and intuitive user interfaces with robust back-ends, and my portfolio is a showcase of my journey in developing dynamic web applications that seamlessly blend functionality and aesthetics. With meticulous attention to detail and a focus on clean code practices, I excel at translating complex requirements into efficient, scalable, and user-centric solutions. From creating interactive components to optimizing performance and collaborating within agile teams, my expertise in React ensures a seamless user experience while maintaining code quality and adherence to industry best practices. Join me as I present a collection of impressive projects that reflect my commitment to excellence and my relentless pursuit of technical mastery.</p>
        </div>
    )
}