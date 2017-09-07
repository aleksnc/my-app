import React, { Component } from 'react';
import './style/style.css';

import MainMenu from  './blocks/mainMenu'
import MySvg from  './blocks/mySvg'

class App extends Component {
    render() {
        return (
            <div>
                <MySvg />
                <div className="mainBlock__wrapper">
                    <div className="mainBlock">

                    </div>
                    <MainMenu />
                </div>
            </div>
        );
    }
}

export default App;
