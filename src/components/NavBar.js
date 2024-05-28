import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

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

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navBar">
            <div className="navBar-container">
                <Link to='/' className="navBar-home">
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
                        <Link to='/lucas' className='nav-links' onClick={closeMobileMenu}>
                            Bio <i class="fa-brands fa-pied-piper-alt"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projetos' className='nav-links' onClick={closeMobileMenu}>
                            Projetos <i class="fa-solid fa-code"></i>
                        </Link>
                    </li>
                </ul>
                {button &&  <Button buttonStyle='btn--outline'>Test</Button>}
            </div>
        </nav>
        </>
    );
}

export default NavBar;