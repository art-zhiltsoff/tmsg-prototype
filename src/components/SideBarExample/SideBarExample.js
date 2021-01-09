import React from 'react';

import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation'; 
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem'; 

function SideBarExample(props) {
    return (
        <SideNavigation>
            <SideNavigationItem
                icon="home"
                text="Home"
            />
            <SideNavigationItem
                expanded
                icon="group"
                text="People"
            >
                <SideNavigationSubItem text="From My Team" />
                <SideNavigationSubItem text="From Other Teams" />
            </SideNavigationItem>
            <SideNavigationItem
                icon="locate-me"
                selected
                text="Locations"
            />
            <SideNavigationItem
                icon="calendar"
                text="Events"
            >
                <SideNavigationSubItem text="Local" />
                <SideNavigationSubItem text="Others" />
            </SideNavigationItem>
        </SideNavigation>
    ); 
}

export default SideBarExample;