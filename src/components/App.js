import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './static/Header';
import RouteTree from '../routes/RouteTree';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './static/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"/>
                <Header/>
                <RouteTree/>
                <Footer/>
            </Router>
        );
    }
}

export default hot(module)(App);
