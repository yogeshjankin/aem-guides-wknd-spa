//Header.js
import React, {Component} from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import wkndLogoDark from '../../media/wknd-logo-dk.png';
require('./Header.scss');


const HeaderEditConfig = {

    emptyLabel: 'Header Empty Label',

    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

class Header extends Component {

    get logo() {
        return (
            <div className="Logo">
                <img className="Logo-img" src={wkndLogoDark} alt="WKND SPA" />
            </div>
        );
    }

    render() {
        return (
                <header className="Header">
                    <div className="Header-container">
                        DEV PORTAL
                    </div>
                </header>
        ); 
    }
}

export default MapTo('wknd-spa-react/components/header')(Header, HeaderEditConfig);