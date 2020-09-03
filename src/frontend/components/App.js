import React, { Component } from 'react';
import { hot, setConfig } from 'react-hot-loader';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import RouteTree from '../routes/RouteTree';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './static/Footer';
import CollapsibleHeader from './static/CollapsibleHeader';

setConfig({
    showReactDomPatchNotification: false
});

class App extends Component {
    render() {
        return (
            <Router>
                <link rel="shortcut icon" href={'/small_square.png'}/>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"/>
                <CollapsibleHeader/>
                <RouteTree/>
                <Footer/>
            </Router>
        );
    }
}

export default hot(module)(App);
