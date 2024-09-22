import {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import "../components/Navbar.css"

function Navbar() {


    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        
        <header>
            {/* <h3></h3> */}
            <nav ref={navRef}>
                <a href="/#"> Home.</a>
                <a href="/#"> My_work.</a>    
                <a href="/#"> Blog.</a>    
                <a href="/#"> About_me.</a> 
                <button className= "navbutton navclosebutton" onClick={showNavbar}>
                    <FaTimes/>
                </button>       
            </nav>
            <button className= "navbutton" onClick={showNavbar}>
                <FaBars/>
            </button> 
        </header>
    );
}

export default Navbar;