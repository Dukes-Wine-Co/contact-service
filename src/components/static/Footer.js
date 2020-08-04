import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../../style/Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <footer className="footer rounded-lg border">
                    <div className="footer-div">
                        <a href="https://dukeswines.com">Dukes Wine </a> <span>&copy; 2020 Dukes Wine.</span>
                    </div>
                    <div className="ml-auto footer-div">
                        <span>Powered by </span><a href="https://github.com/Dukes-Wine-Co/contact-frontend">Dukes Wine Engineering</a>
                    </div>
                    <br/>
                    <div>
                        <img className="centered" src={'small_square.png'} alt={'This is the dukes wine logo.'}/>
                    </div>
                </footer>
            </div>
        );
    }
}

export default hot(module)(Footer);
