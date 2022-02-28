import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';

// Import Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Card from './components/Card'

class Principal extends React.Component{
    render(){
        return(
            <div id='container'>
                <Navbar />
                <main className='main'>
                    
                </main>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<Principal />, document.getElementById('root'));