import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <h1>Home Component</h1>
            <Link to={'/about'}>About</Link> <br />      
            <Link to={'/faq'}>Faq</Link> <br />
            <Link to={'/contact'}>Contact</Link> <br />
            <Link to={'agentListing'}>AgentListing</Link>
        </div>
     );
}
 
export default Home;