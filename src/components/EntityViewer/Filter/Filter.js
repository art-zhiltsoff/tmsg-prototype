import React, { useEffect, useState } from 'react';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import Toolbar from '../../UI/Toolbar';
import Input from '../../UI/Input';
import { Form } from '@ui5/webcomponents-react/lib/Form';

function Filter(props) {
    const [controls, setControls] = useState(props.controls);
    
    /* useEffect(()=>{
        setControls(prop)
    }, []); */

    let formControls = []
    for (let key in controls) {        
        formControls.push({
            id: key,
            ...controls[key]
        })
    }

    console.log(formControls);

    const inputChangeHandler = (event, id) => {

    } 

    return (
        <Modal show={props.show}>
            <Form title="Filter">
                {formControls.map(c => {
                    return <Input
                        key={c.id}
                        type={c.type}
                        config={c.config}
                        value={c.value}
                        onChange={(event) => inputChangeHandler(event, c.id)}
                    />
                })}
            </Form>
            <Toolbar>
                <Button primary onClick={() => props.dispatch('OK')}>OK</Button>
                <Button onClick={() => props.dispatch('CANCEL')}>Cancel</Button>
            </Toolbar>
        </Modal>
    );
}

export default Filter;