import React from 'react';
import { Table as UI5Table} from '@ui5/webcomponents-react/lib/Table';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
//import { CheckBox } from  '@ui5/webcomponents-react/lib/CheckBox';

function column(props) {
    return <TableColumn>
        <div onClick={props.onClick}>
            <Label>{props.label}</Label>
        </div>
    </TableColumn>;
}

function Table(props) {
    console.log('[Table.js] render', props);

    const columns = [];
    
    for (let key in props.columns) {        
        columns.push(column({
            label: props.columns[key].label,
            onClick: () => props.onHeaderClick(key)
        }))        
    }
    // adding ID header
    columns.push(column({
        label: "ID",
        onClick: () => props.onHeaderClick("ID")
    }));
    
    const rows = [];    
    for (let key in props.data) {
        const data = props.data[key];
        const cells = [];        
        
        for (let columnKey in props.columns) {            
            const column = props.columns[columnKey];
            let value = data[columnKey];
            if (column.type === 'bool') {
                value = (value ? 'Yes' : 'No');
            }
            cells.push(
                <TableCell>
                    {value}
                </TableCell>
            );
        }
        // adding ID value
        cells.push(
            <TableCell>
                <Label>{key}</Label>
            </TableCell>
        );
        rows.push(<TableRow id={key}>{cells}</TableRow>);
    }
    
    return <UI5Table 
        columns={<>{columns}</>}
        onRowClick={props.onRowClick}>{rows}
    </UI5Table>;
}

export default Table;