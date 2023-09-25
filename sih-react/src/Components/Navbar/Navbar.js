
import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
function Navbar(){
    const [clicked,setClicked]=useState(false);
    const Toggle=()=>{
        setClicked((prevInstance)=>!prevInstance);
    }
    return(
        <nav>
            <span className="Navbar-heading">CryptoCrux</span>
            <div>
                <ul id="Navbar-Menu-Container" className={clicked?"Navbar-Menu-Container active":"Navbar-Menu-Container"}>
                    <Link to="home" smooth={true} duration={1000}><li><a href="#" className="active">Home</a></li></Link>
                    <Link to="feature" smooth={true} duration={1000}><li><a href="#" className="active">Generate</a></li></Link>
                    <Link to="team" smooth={true} duration={1000}><li><a href="#" className="active">Deploy</a></li></Link>
                    <li><a href="#" className="active">Verify</a></li>
                    <li className="Login"><a href="#" className="active">Cruxer 🔐</a></li>
                </ul>
            </div>
            <div className="Navbar-Mobile-Menu-Container" onClick={Toggle}>
                <img className="Navbar-Mobile-Menu" src={clicked?"assets/images/close.png":"assets/images/navigation-bar.png"}/>
            </div>
        </nav>
    )
}
export default Navbar;