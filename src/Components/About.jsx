import React from 'react';
import Navbar from './Navbar';
import '../Styles/About.css'

const About = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <div className="learnMore">
                <h1>Do you have an</h1>
                <h1>accomodation or rent ?</h1>

                <button>
                    Become an agent
                </button>

                <div className="learnMore__backgroundImg">
                </div>

                <div className="learnMore__more">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus, itaque officia culpa nobis error sapiente commodi odio tempora quidem omnis earum dolorem illum, magni quaerat, architecto quas. Dolorem magni magnam culpa, asperiores harum ratione eos iure voluptatum consequuntur voluptatem numquam accusantium nobis saepe, consequatur obcaecati laboriosam? Eos, aperiam placeat!
                </div>

                {/* <div className="learnMore__button">
                    <button>Go to Marketplace</button>
                </div> */}
        </div>
        </React.Fragment>
     );
}
 
export default About;