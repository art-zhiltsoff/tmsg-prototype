import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Layout.module.css';
import NavBar from '../Navigation/NavBar';
import SideBarExample from '../SideBarExample';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import Button from '../UI/Button';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import '@ui5/webcomponents-icons/dist/employee';

import tmsLogo from '../../assets/logo.png';

function Layout(props) {    
    console.log('[Layout.js] render');

    const history = useHistory();

    const logoClickHandler = (event) => {
        history.push('/');
    }

    const actionSheetRef = useRef();
    const profileClickHandler = (e) => {
        actionSheetRef.current.open(e.target);
    }

    return (
        <React.Fragment>
            <ShellBar                
                logo={<img src={tmsLogo} alt="TMS" />}
                primaryTitle="TMS Global"
                menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item 3</StandardListItem></>}
                showNotifications
                notificationCount={10}
                showProductSwitch
                onLogoClick={logoClickHandler}
                profile={<div onClick={profileClickHandler}>
                    <Avatar size="XS" icon="employee"/>
                </div>}
            >
                <ActionSheet
                    ref={actionSheetRef} 
                    placementType="Bottom">
                    <Button design="Transparent">Settings</Button>
                    <Button design="Transparent">Log off</Button>
                </ActionSheet>
                
            </ShellBar>
            {/* <NavBar items={props.entities}/> */}
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