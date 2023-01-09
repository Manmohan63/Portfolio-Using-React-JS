import './Navbar.scss'
import logo from './mm.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar" id="navbar">
                <div className="image">
                    <img src={logo} alt="mylogo" />
                    Manmohan Mandhan
                </div>
                <div className="content">
                    <a href="#intro" className="home">Home</a>
                    <a href="#about" className="about">About</a>
                    <a href="#skills" className="skills">Skills</a>
                    <a href="#portfolio" className="portfolio">Portfolio</a>
                    <a href="#contact" className="contact">Contact</a>
                </div>
                <div className="icons">
                    <a href="mailto:mandhanmanmohan63@gmail.com"><ion-icon name="mail"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/mandhan63/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/Manmohan63"><ion-icon name="logo-github"></ion-icon></a>
                </div>
            </div>
        </>
    )
}

export default Navbar