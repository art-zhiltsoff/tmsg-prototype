import React from 'react';
import { Toolbar as UI5Toolbar} from '@ui5/webcomponents-react/lib/Toolbar';
import { Bar as UI5Bar} from '@ui5/webcomponents-react/lib/Bar';
import classes from './Toolbar.module.css';

function Toolbar(props) {
    let contentLeft = null;
    let contentMiddle = null;
    let contentRight = null;

    if (props.itemsAlign === 'right') {
        contentRight = props.children;
    } else {
        contentLeft = props.children;
    }
    
    return <UI5Bar className={classes.Toolbar}
        {...props} 
        contentLeft={contentLeft}
        contentMiddle={contentMiddle} 
        contentRight={contentRight}/>;
    
    /* return <UI5Toolbar {...props} toolbarStyle="Clear">{props.children}</UI5Toolbar>; */
}

export default Toolbar;