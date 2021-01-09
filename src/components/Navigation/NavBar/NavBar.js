import React from 'react';
import NavItem from './NavItem';
import classes from './NavBar.module.css';
import Logo from '../../Logo';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const menuItems = [];
    for (let key in props.items) {
        menuItems.push({
            link: key,
            title: props.items[key]
        })
    }
    
    return (
        <header className={classes.NavBar}>
            <nav>            
                <ul className={classes.NavItems}>                    
                    <div className={classes.Logo}>                            
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>                    
                    {menuItems.map(item => <NavItem link={item.link}>{item.title}</NavItem>)}
                    <NavItem link="/side-bar">Side bar</NavItem>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
