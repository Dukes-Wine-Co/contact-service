import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../style/Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <footer className="footer rounded-lg border">
                    <div>
                        <a href="https://dukeswines.com">Dukes Wine </a> <span>&copy; 2020 Dukes Wine.</span>
                    </div>
                    <br/>
                    <div className="ml-auto">
                        <span>Powered by </span><a href="https://dukeswines.com">Dukes Wine</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default hot(module)(Footer);
