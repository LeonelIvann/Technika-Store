import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';

// Import Components
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

class Principal extends React.Component{
    render(){
        return(
            <div id='container'>
                <Navbar />
                <main className="main">
                    <ItemListContainer/>
                    <Footer/>
                </main>
            </div>
        );
    }
}

ReactDOM.render(<Principal />, document.getElementById('root'));