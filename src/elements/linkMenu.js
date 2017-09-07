import React, { Component } from 'react';


class LinkMenu extends Component {
    render() {
        return (
            <ul className="mainMenu__list">
                {this.props.items.map((item, index)=>
                    <li className="mainMenu__link" key={index}>
                        <a href={item.href} className="btn btn--nav history">
                            <svg viewBox="0 0 483.5 483.5">
                                <use x="0" y="0" xmlnsXlink="https://www.w3.org/1999/xlink" xlinkHref={item.xlink}></use>
                            </svg>
                        </a>
                    </li>
                )}
            </ul>
        );
    }
}

export default LinkMenu;
