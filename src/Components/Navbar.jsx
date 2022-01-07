import React from 'react';
import '../Styles/Navbar.css'
import Logo from '../assets/logo.png';
import LogoName from '../assets/logoName.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav__left">
                <img src={Logo} alt="logo" />
                <img src={LogoName} alt="logo" />
            </div>            

            <div className="nav__right">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/marketplace'}>Market Place</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
            </div>
        </nav>
     );
}
 
export default Navbar;