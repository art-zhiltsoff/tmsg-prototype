import React from 'react';
import classes from './Layout.module.css';
import NavBar from '../navigation/NavBar';

function Layout(props) {
    return (
        <React.Fragment>
            <NavBar items={props.entities}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout;