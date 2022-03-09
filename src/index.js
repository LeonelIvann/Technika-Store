import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';

// Import Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'

class Principal extends React.Component{
    render(){
        return(
            <div id='container'>
                <Navbar />
                <main className="main">
                    <ItemListContainer/>
                </main>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<Principal />, document.getElementById('root'));