import React from 'react';
import { useHistory } from 'react-router-dom';

import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation'; 
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem';

import '@ui5/webcomponents-icons/dist/home';
import '@ui5/webcomponents-icons/dist/course-book';
import '@ui5/webcomponents-icons/dist/bubble-chart';

function SideBar(props) {
    console.log('[SideBar.js] render ', props);
    
    const history = useHistory();

    const subItems = [];
    for (let key in props.items) {
        subItems.push(
            <SideNavigationSubItem  
                text={props.items[key]} 
                data-link={"/"+key}
            />
        );
    }
    
    const itemClickHandler = (event) => { 
        history.push(event.detail.item.dataset.link);
    }
    
    return (
        <SideNavigation onSelectionChange={itemClickHandler}>
            <SideNavigationItem
                icon="home"
                text="Home"
                data-link="/"
            />
            <SideNavigationItem
                icon="course-book"
                text="Dictionaries"
            >
                {subItems}
            </SideNavigationItem>
            <SideNavigationItem 
                icon='bubble-chart'
                text='Charts'
                data-link="/charts"/>
        </SideNavigation>
    ); 
}

export default SideBar;