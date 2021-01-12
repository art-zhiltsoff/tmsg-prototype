import React from 'react';
import classes from './Button.module.css';
import { Button as UI5Button } from '@ui5/webcomponents-react/lib/Button';
import '@ui5/webcomponents-icons/dist/add';
import '@ui5/webcomponents-icons/dist/delete';
import '@ui5/webcomponents-icons/dist/edit';
import '@ui5/webcomponents-icons/dist/filter';

function Button(props) {
    // UI5 primary => design : "Emphasized"
    const design = props.primary ? "Emphasized" : props.design;

    return (
        <div>
            <UI5Button
                 className={classes.Button} 
                {...props} 
                icon={props.icon} 
                design={design}>{props.children}                
            </UI5Button>
        </div>
    );
}

export default Button;