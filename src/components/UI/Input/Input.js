import React from 'react';
import classes from './Input.module.css';
import { FormItem as UI5FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { Input as UI5Input } from '@ui5/webcomponents-react/lib/Input';
import { CheckBox as UI5CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { DatePicker as UI5DatePicker} from '@ui5/webcomponents-react/lib/DatePicker';
import { DateTimePicker as UI5DateTimePicker} from '@ui5/webcomponents-react/lib/DateTimePicker';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Option } from '@ui5/webcomponents-react/lib/Option';

function Input(props) {
    let inputElement;
    //console.log(props);
    switch (props.type) {
        case 'input':
            inputElement = <UI5Input
                type="Text"
                {...props.config}
                value={props.value}
                onInput={props.onChange}
            />;
            break;
        case 'datePicker':
            inputElement = <UI5DatePicker
                formatPattern="dd.MM.YYYY"
                {...props.config}
                value={props.value}
                onChange={props.onChange}    
            />;
            break;
        case 'dateTimePicker':
            inputElement = <UI5DateTimePicker
                formatPattern="dd.MM.YYYY H:mm:ss"
                {...props.config}
                value={props.value}
                onChange={props.onChange}    
            />;
            break;
        case 'checkbox': 
            inputElement = <UI5CheckBox
                {...props.config}
                checked={props.value}
                onChange={props.onChange}
            />;
            break;
        case 'number':
            inputElement = <UI5Input
                className={classes.InputNumber}
                type="Number"
                {...props.config}
                value={props.value}
                onInput={props.onChange}
            />;
            break;
        case 'select':
            //console.log(props);
            inputElement = <Select
                onChange={props.onChange}>
                    {props.config.options.map(op => (
                        <Option 
                            key={op.value} 
                            data-id={op.value}
                            selected={op.value === props.value}>
                            {op.displayValue}
                        </Option>
                    ))}
                </Select>;
            break;
        default:
            inputElement = null;
    }
    return <UI5FormItem label={props.label}>
        {inputElement}
    </UI5FormItem>;    
}

export default Input;