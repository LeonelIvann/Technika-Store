import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';

// Components
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

class Principal extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div id='container'>
                <Navbar />
                    <Main>
                        <ItemListContainer />
                        <ItemDetailContainer />
                    </Main>
                <Footer/>
                    <ToastContainer />
            </div>
            </BrowserRouter>
        );
    }

}

ReactDOM.render(<Principal />, document.getElementById('root'));