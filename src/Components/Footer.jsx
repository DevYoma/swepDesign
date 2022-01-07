import React from 'react';
import '../Styles/Footer.css';
import Logo from '../assets/logo.png'
// import LogoName from '../assets/logoName.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer__top">
                <div>
                    <h3>Products</h3>
                    <p>Marketplace</p>
                    <p>Become an Agent</p>
                </div>

                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>

                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of service</p>
                    <p>FAQs</p>
                </div>

                <div className="footer__newsLetter">
                    <h3>Our NewsLetter</h3>
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe to newsLetter</button>
                </div>
            </div>

            <hr />

            <div className="footer__bottom">
                <div className="footer__logo">
                        <img src={Logo} alt="logo" />
                        <p>HostelInitiative</p>
                </div>  

                <small>Copyright HostelInitiative 2021</small>
            </div>
        </div>
     );
}
 
export default Footer;