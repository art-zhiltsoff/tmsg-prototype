import React from 'react';
import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';

function Table(props) {
    console.log('[Table.js] render', props);

    const columns = [];    
    for (let key in props.columns) {        
        columns.push({
            Header: props.columns[key].label,
            accessor: key,
        })
    }
    columns.push({
        Header: "ID",
        accessor: "id"
    });
    
    const data = [];
    
    for (let key in props.data) {
        data.push({...props.data[key], id: key});
    }
    
    return <AnalyticalTable 
        selectionMode="SingleSelect"    
        filterable
        columns={columns}
        data={data}
        onRowSelected={props.onRowClick}
        withRowHighlight
        minRows={1}    
    />;
    
}

export default Table;