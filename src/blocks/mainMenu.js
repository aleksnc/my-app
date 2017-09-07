import React, { Component } from 'react';

import LinkMenu from  '../elements/linkMenu'

const menu =[
  {
    href: '/account.html',
    xlink: '#user'
  },
  {
    href: '/messages.html',
    xlink: '#message'
  },
  {
    href: '/maps.html',
    xlink: '#point'
  },
  {
    href: '/search.html',
    xlink: '#search'
  },
  {
    href: '/settings.html',
    xlink: '#settings'
  }
]

class MainMenu extends Component {
  render() {
    return (
        <div className="mainMenu">
          <LinkMenu items={menu} />
        </div>
    );
  }
}

export default MainMenu;
