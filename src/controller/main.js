import React, { Component } from 'react';

import Account from  '../pages/account';
import Messages from  '../pages/messages';


function pageGET() {

    var path = window.location.pathname.split("/");
    var pathName = path[path.length - 1];


    switch (pathName) {
        case 'index.html':
            //  appendPage('main.html', true);
            break;

        case 'registration.html':
            //  appendPage('registration.html', true);
            break;

        case 'login.html':
            //   appendPage('login.html');
            break;

        case 'account.html':
           return <Account />;
            break;

        case 'maps.html':
            //   appendPage('maps.html');
            break;


        case 'settings.html':
            //  appendPage('settings.html');
            break;

        case 'messages.html':
            return <Messages />;
            break;

        case 'message.html':

            break;

        case 'search.html':
            //  appendPage('search.html');
            break;

        default:
            console.log('index');
            //   appendPage('main.html', true);
            break;
    }
}

class Main extends Component {
    render() {
        return (
            <div className="mainBlock">
                {pageGET()}
            </div>
        );
    }
}

export default Main;
