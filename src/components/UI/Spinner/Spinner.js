import React from 'react';
import classes from './Spinner.module.css';
/* import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator'; */
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';

const spinner = () => {   
    return <Spinner active className={classes.Spinner}/>
    {/* <div className={classes.Loader}>Loading...</div>     */}
}

export default spinner;