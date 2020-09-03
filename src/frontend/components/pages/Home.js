import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import PageHeader from '../static/PageHeader';

class App extends Component {
    render() {
        const dukesWineEmail = 'technology@dukeswines.com';
        const githubReadmeUrl = 'https://github.com/Dukes-Wine-Co/contact-service/blob/master/README.md';

        return (
            <div className="Home">
                <div className="headerKey">
                    <PageHeader title={this.props.title} />
                </div>
                <Jumbotron>
                    <div className="app-txt">
                        <p>Welcome to the Dukes Wine contact management interface.</p>
                        <p>If you have any questions, feel free to reach out to <a
                            href={'mailto:' + dukesWineEmail}>{dukesWineEmail}</a></p>
                    </div>
                    <div className="centered">
                        <p align="center">
                            <a href={githubReadmeUrl}>
                                <Button variant="primary">Learn more</Button>
                            </a>
                        </p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default hot(module)(App);
