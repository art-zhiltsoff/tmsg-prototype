import React, { useEffect, useState } from 'react';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import Toolbar from '../../UI/Toolbar';
import Input from '../../UI/Input';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import axios from '../../../axios';
import classes from './ObjectForm.module.css';

function inputType(columnType) {
    switch (columnType) {
        case 'bool':
            return 'checkbox';
        case 'date':
            return 'datePicker';
        case 'datetime':
            return 'dateTimePicker';
        case 'number':
            return 'number';
        default:
            return 'input'; 
    }
}

function getValue(target, control) {
    switch (control.type) {
        case 'bool':
            return target.checked
        default:
            return target.value
    }
}

function updateObject (oldObject, updatedProperties) {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

function columnsToObjectForm(columns, object) {
    const objectForm = {};
    for (let key in columns) {
        objectForm[key] = {
            ...columns[key], 
            value: object ? object[key] : ''
        }          
    }
    return objectForm;
}

function objectFormToControls(objectForm) {
    const formControls = [];
    for (let key in objectForm) {
        formControls.push({
            ...objectForm[key],
            id: key,
            name: key,            
            type: inputType(objectForm[key].type)            
        });            
    }
    return formControls;
}

function ObjectForm(props) {
    console.log('[ObjectForm.js] render', props);
    const [objectForm, setObjectForm] = useState(columnsToObjectForm(props.metadata.columns, props.currentItem));

    const inputChangeHandler = (event, controlId) => {
        const control = objectForm[controlId];
        const value = getValue(event.target, control);
        const updatedControl = updateObject(objectForm[controlId], {
            value: value
        });
        const updatedObjectForm = updateObject(objectForm, {
            [controlId]: updatedControl
        });
        setObjectForm(updatedObjectForm);
    }

    const submitObject = () => {
        const formData = {};
        for (let key in objectForm) {
            formData[key] = objectForm[key].value;        
        }
        let url = props.dataUrl;
        if (props.currentItemId) {
            url = url + '/' + props.currentItemId;
            axios.put(url + '.json', formData)
            .then(response => {
                props.dispatch('OK');
            })
        } else {
            axios.post(url + '.json', formData)
            .then(response => {
                props.dispatch('OK');
            })
        }
        
    }

    const formElementsArray = objectFormToControls(objectForm).map(c => {
        return <Input
            key={c.id}
            type={c.type}
            config={c.config}
            value={c.value}
            label={c.label}
            onChange={(event) => inputChangeHandler(event, c.id)}
        />
    });

    let title = "New";
    if (props.currentItemId) {
        title = `ID: ${props.currentItemId}`;
    }

    return (
        <Modal show={props.show}>
            <Form title={title}
                columnsS={2}
                columnsM={2}
                columnsL={2} 
                columnsXL={2}
                labelSpanS={1}
                labelSpanM={1}
                labelSpanL={1}
                labelSpanXL={1}
            >
                <FormGroup>
                    {formElementsArray}
                </FormGroup>
            </Form>
            <Toolbar className={classes.Toolbar} design="Footer" itemsAlign="right">
                <Button primary onClick={submitObject}>OK</Button>
                <Button onClick={() => props.dispatch('CANCEL')}>Cancel</Button>
            </Toolbar>
        </Modal>
    );
}

export default ObjectForm;