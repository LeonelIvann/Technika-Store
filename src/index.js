import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';

// Import Components
import Header from './components/Header'
import Card from './components/Card'

class Principal extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <hr></hr>
                <div className='container-card'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Principal />, document.getElementById('root'));