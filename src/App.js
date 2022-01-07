import React from 'react'
import { Routes, Route } from "react-router-dom";
import '../src/App.css'
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Faq from '../src/Components/Faq'
import Contact from '../src/Components/Contact'
import AgentListing from '../src/Components/AgentListing'
import Navbar from '../src/Components/Navbar';


const App = () => {
    return ( 
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="faq" element={<Faq />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="agentlisting" element={<AgentListing />}/>
            </Routes>
        </React.Fragment>
     );
}
 
export default App;