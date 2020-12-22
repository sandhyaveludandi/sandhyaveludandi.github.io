import React, {Component} from 'react';
import './App.css';
import SpaceHeader from './components/SpaceHeader/SpaceHeader';
import NavBar from './components/NavBar/NavBar'; 
import Sections from './components/Sections/Sections'
import Footer from './components/Footer/Footer';

class App extends Component {
 
    render() {
        return (
            <div className="App">
                <div id="name">SANDHYA VELUDANDI</div>
                <div>
                    <SpaceHeader />
                    <NavBar />
                    <Sections />
                    <Footer />
                </div> 
            </div>
        ); 
    }; 
};

export default App; 