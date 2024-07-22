import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navBar">
            <div className="navBar-container">
                <Link to='/' className="navBar-home" onClick={closeMobileMenu}>
                    <i class="fa-solid fa-blog"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home <i class="fa-solid fa-house"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/bio' className='nav-links' onClick={closeMobileMenu}>
                            Bio <i class="fa-brands fa-pied-piper-alt"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projetos <i class="fa-solid fa-code"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default NavBar;