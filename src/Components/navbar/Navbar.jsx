import './Navbar.scss'

const Navbar = ({ menuopen, setmenuopen }) => {
    return (
        <>
            <div className={"navbar " + (menuopen && "active") } id="navbar">
                <div className="hehe">
                    <div className="blank">
                    </div>
                    <div className="image">
                        <img src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810274/mm_pmymwo.png" alt="mylogo" />
                        Manmohan Mandhan
                    </div>
                    <div className="hamburger" onClick={() => setmenuopen(!menuopen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
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
export default Navbar;