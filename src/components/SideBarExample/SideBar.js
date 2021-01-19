import React from 'react';
import { useHistory } from 'react-router-dom';

import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation'; 
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem';

import '@ui5/webcomponents-icons/dist/home';
import '@ui5/webcomponents-icons/dist/course-book';
import '@ui5/webcomponents-icons/dist/bubble-chart';

import { useTranslation } from 'react-i18next';

function SideBar(props) {
    console.log('[SideBar.js] render ', props);
    
    const history = useHistory();
    const { t, i18n } = useTranslation();

    const subItems = [];
    for (let key in props.items) {
        subItems.push(
            <SideNavigationSubItem  
                text={t(props.items[key])}
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
                text={t('home')}
                data-link="/"
            />
            <SideNavigationItem
                icon="course-book"
                text={t('dictionaries')}
            >
                {subItems}
            </SideNavigationItem>
            <SideNavigationItem 
                icon='bubble-chart'
                text={t('charts')}
                data-link="/charts"/>
        </SideNavigation>
    ); 
}

export default SideBar;