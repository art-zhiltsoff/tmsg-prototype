import React from 'react';
import classes from './Layout.module.css';
import NavBar from '../Navigation/NavBar';
import SideBarExample from '../SideBarExample';



function Layout(props) {    
    console.log('[Layout.js] render');

    return (
        <React.Fragment>
            <NavBar items={props.entities}/>
            <div className={classes.Main}>
                <SideBarExample items={props.entities} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </div>
        </React.Fragment>
    )
}

export default Layout;