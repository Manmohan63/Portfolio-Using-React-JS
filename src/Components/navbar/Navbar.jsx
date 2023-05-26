import './Navbar.scss'

const Navbar = ({ menuopen, setmenuopen }) => {
    return (
        <>
            <div className={"fixed top-0 left-0 right-0 bg-blue-500 text-white flex items-center justify-between font-normal tracking-wider text-lg z-10 text-whit m-0 p-0 bg-myblue " + (menuopen && "active") } id="navbar">
                <div className="flex">
                    <div className="blank">
                    </div>
                    <div className="flex items-center justify-around">
                        <img className="m-[10px] ml-[50px] h-[50px] w-[50px]" src="https://res.cloudinary.com/dk8ign4oc/image/upload/v1673810274/mm_pmymwo.png" alt="mylogo" />
                        Manmohan Mandhan
                    </div>
                    <div className="hamburger" onClick={() => setmenuopen(!menuopen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="flex items-center justify-around flex-grow-0.5">
                    <a className=" hover:scale-110 transition-all duration-5 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="#home">Home</a>
                    <a className=" hover:scale-110 transition-all duration-5 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="#about">About</a>
                    <a className=" hover:scale-110 transition-all duration-5 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="#skills">Skills</a>
                    <a className=" hover:scale-110 transition-all duration-5 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="#projects">Projects</a>
                    <a className=" hover:scale-110 transition-all duration-5 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="#contact">Contact</a>
                </div>
                <div className="flex items-center justify-around m-[10px] mr-[50px] flex-grow-0.15">
                    <a className=" hover:scale-140 transition-all duration-50 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="mailto:mandhanmanmohan63@gmail.com"><ion-icon name="mail"></ion-icon></a>
                    <a className=" hover:scale-140 transition-all duration-50 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="https://www.linkedin.com/in/mandhan63/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a className=" hover:scale-140 transition-all duration-50 hover:bg-lightblue hover:p-[5px] hover:rounded-xl" href="https://github.com/Manmohan63"><ion-icon className="h-[400px] w-[400px]" name="logo-github"></ion-icon></a>
                </div>
            </div>
        </>
    )
}
export default Navbar;