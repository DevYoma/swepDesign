import React from 'react';
import '../Styles/Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <div className="contact">
                <h1>Contact Us</h1>

                <div className="contact__info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>

                <div className="contact__form">
                    <div>
                        <label htmlFor="name">Name</label><br />
                        <input 
                            type="text" 
                            placeholder='e.g Naira Marley'
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input 
                            type="email" 
                            placeholder='e.g - hotelinitiative@gmail.com'
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Message</label> <br />
                        <textarea 
                            type="email" 
                            placeholder='e.g - hotelinitiative@gmail.com'
                        />
                    </div>

                    <button className="contact__button">
                        Contact Us
                    </button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
     );
}
 
export default Contact;