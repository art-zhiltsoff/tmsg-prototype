import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Layout.module.css';
//import NavBar from '../Navigation/NavBar';
import SideBarExample from '../SideBarExample';

import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { List } from '@ui5/webcomponents-react/lib/List';

//import Button from '../UI/Button';
import '@ui5/webcomponents-icons/dist/employee';
import '@ui5/webcomponents-icons/dist/globe';

import tmsLogo from '../../assets/logo.png';

import { useTranslation } from 'react-i18next';

function Layout(props) {    
    console.log('[Layout.js] render');

    const history = useHistory();
    const { t, i18n } = useTranslation();    

    const logoClickHandler = (event) => {
        history.push('/');
    }

    const actionSheetRef = useRef();
    const profileClickHandler = (e) => {
        actionSheetRef.current.open(e.target);
    }

    const langListRef = useRef();
    const langClickHandler = (e) => {
        langListRef.current.open(e.detail.targetRef);
    }
    const langItemHandler = (e) => {
        const lang = e.detail.item.id;
        console.log(`Switching language to ${lang}`);
        i18n.changeLanguage(lang);
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
                profile={
                    <div onClick={profileClickHandler}>
                        <Avatar size="XS" icon="employee"/>
                    </div>
                }
            >
                <ShellBarItem 
                    icon="globe"
                    onItemClick={langClickHandler}>                    
                </ShellBarItem>
            </ShellBar>
            {/* <NavBar items={props.entities}/> */}
            <div className={classes.Main}>
                <SideBarExample items={props.entities} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </div>
            
            <ActionSheet
                ref={actionSheetRef} 
                placementType="Bottom">
                <StandardListItem>Settings</StandardListItem>
                <StandardListItem>Log off</StandardListItem>
            </ActionSheet>

            <ActionSheet
                ref={langListRef} 
                placementType="Bottom">
                <List onItemClick={langItemHandler}>
                    <StandardListItem id="en">EN</StandardListItem>
                    <StandardListItem id="ru">RU</StandardListItem>
                </List>
            </ActionSheet>
        </React.Fragment>
    )
}

export default Layout;