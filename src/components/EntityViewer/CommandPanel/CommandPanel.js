import React from 'react';
import Toolbar from '../../UI/Toolbar';
import Button from '../../UI/Button';

function CommandPanel(props) {
    
    const buttons = props.actions.map(action => {
        return <Button 
            icon={action.icon} 
            onClick={() => props.dispatch(action.action)}>
            {action.title}
        </Button>
    })
    
    return (
        <Toolbar design="Header">
            {buttons}
        </Toolbar>
    );
}

export default CommandPanel;