import './Navbar.css';

export const Navbar = () => {
  const handleHireButtonClick = () => {
    window.location.href = 'mailto:aleczytkowski@gmail.com/subject=Hello Alec!';
  };
  return (
    <nav className="navbar">
      <div className="logo">Alec Zytkowski</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="hire-button" onClick={handleHireButtonClick}>
        Contact Me!
      </button>
    </nav>
  );
}