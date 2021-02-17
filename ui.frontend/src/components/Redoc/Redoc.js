//Header.js
import React, {Component} from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { RedocStandalone } from 'redoc';
require('./Redoc.scss');


const RedocEditConfig = {

    emptyLabel: 'Redoc Redoc',

    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

class Redoc extends Component {

    render() {
        
            console.log('linkUrl ');
            console.log('linkUrl '+this.props.linkURL);
            return <RedocStandalone specUrl={this.props.linkURL} />;
        
    }

}

export default MapTo('wknd-spa-react/components/redoc')(Redoc, RedocEditConfig);