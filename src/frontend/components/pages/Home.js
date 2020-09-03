import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class App extends Component {
    render() {
        const dukesWineEmail = 'technology@dukeswines.com';

        return (
            <div className="Home">
                <h1>Home</h1>
                <Jumbotron>
                    <div className="app-txt">
                        <p>Welcome to the contact management interface.</p>
                        <p>If you have any questions, feel free to reach out to <a
                            href={'mailto:' + dukesWineEmail}>{dukesWineEmail}</a></p>
                    </div>
                    <div className="centered">
                        <p align="center">
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default hot(module)(App);
