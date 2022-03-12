import React from 'react'
import ReactDOM from 'react-dom'
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

// Import Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

class Principal extends React.Component{

    render(){
        return(
            <div id='container'>
                <Navbar />
                <main className="main">
                    <ItemListContainer />
                    <ItemDetailContainer />
                </main>
                <Footer/>
            </div>
        );
    }

}

ReactDOM.render(<Principal />, document.getElementById('root'));