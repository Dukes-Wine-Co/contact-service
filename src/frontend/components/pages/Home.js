import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
    render() {
        const dukesWineEmail = 'technology@dukeswines.com';

        return (
            <div className="Home">
                <h1>Home</h1>
                <div className="app-txt">
                    <p>Welcome to the contact submission interface.</p>
                    <p>If you have any questions, feel free to reach out to <a
                        href={'mailto:' + dukesWineEmail}>{dukesWineEmail}</a></p>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
