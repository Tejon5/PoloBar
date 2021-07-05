import React from "react";
import "./navbar.css"

const Navbar = ({isScrolling}) =>{

    const toTheTop = () =>{
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }

    return (
        <nav className={`navbar ${isScrolling>20 ? "scrolling" : null}`}>
            <div className="logo" onClick={toTheTop}>Badger Bar</div>
           {/*   <div className="menu">
                <ul>
                    <li className="menu1"><a>Menu</a></li>
                    <li className="menu2"><a>Horarios</a></li>
                    <li className="menu3"><a>Promos</a></li>
                </ul>
            </div>  */}
        </nav>
    )
}

export default Navbar;