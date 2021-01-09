import React from 'react';
import tmsLogo from '../../assets/logo.png';
import classes from './Logo.module.css';

function Logo(props) {
    return <div className={classes.Logo}>
        <img src={tmsLogo} alt="TMS" />
    </div>;
}

export default Logo;