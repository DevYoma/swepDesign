import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Agent from './Agent';
import '../Styles/About.css'

const About = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <div className="aboutMore">
                <div>
                    <div className='aboutMore__info'>
                        <h1>Do you have an</h1>
                        <h1>accomodation or rent ?</h1>
                    </div>

                    <button>
                        Become an agent
                    </button>

                </div>

                <div className="aboutMore__backgroundImg">
                </div>

                <div className="aboutMore__more">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus, itaque officia culpa nobis error sapiente commodi odio tempora quidem omnis earum dolorem illum, magni quaerat, architecto quas. Dolorem magni magnam culpa, asperiores harum ratione eos iure voluptatum consequuntur voluptatem numquam accusantium nobis saepe, consequatur obcaecati laboriosam? Eos, aperiam placeat!
                </div>
            </div>
            <Agent />
            <Footer />
        </React.Fragment>
     );
}
 
export default About;