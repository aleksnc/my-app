import React, { Component } from 'react';
import './style/style.css';
import MySvg from  './blocks/mySvg';

import ControllerMain from  './controller/main';

import MainMenu from  './blocks/mainMenu';

class App extends Component {
    render() {
        return (
            <div>
                <MySvg />
                <div className="mainBlock__wrapper">
                    <ControllerMain />

                    <MainMenu />
                </div>
            </div>
        );
    }
}

export default App;
