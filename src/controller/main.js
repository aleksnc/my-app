import React, { Component } from 'react';

import Account from  '../pages/account';
import Messages from  '../pages/messages';
import Message from  '../pages/messages';
import Maps from  '../pages/maps';
import Login from  '../pages/maps';
import IndexPage from  '../pages/indexPage.js';


function pageGET() {

    var path = window.location.pathname.split("/");
    var pathName = path[path.length - 1];


    switch (pathName) {
        case 'index.html':
            return <IndexPage />;
            break;

        case 'registration.html':
            return <Login />;
            break;

        case 'login.html':
            return <Login />;
            break;

        case 'account.html':
           return <Account />;
            break;

        case 'maps.html':
            return <Maps />;
            break;

        case 'settings.html':
            return <Login />;
            break;

        case 'messages.html':
            return <Messages />;
            break;

        case 'message.html':
            return <Message />;
            break;

        case 'search.html':
            return <Login />;
            break;

        default:
                return <IndexPage />;
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
