import React from 'react';
import Toolbar from '../../UI/Toolbar';
import Button from '../../UI/Button';

import { useTranslation } from 'react-i18next';

function CommandPanel(props) {
    const {t, i18n} = useTranslation();

    const buttons = props.actions.map(action => {
        return <Button 
            icon={action.icon} 
            onClick={() => props.dispatch(action.action)}>
            {t(action.title)}
        </Button>
    })
    
    return (
        <Toolbar design="Header">
            {buttons}
        </Toolbar>
    );
}

export default CommandPanel;