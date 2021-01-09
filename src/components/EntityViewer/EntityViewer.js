import React, { useState, useEffect } from 'react';
import axios from '../../axios';
//import Filter from './Filter';
import CommandPanel from './CommandPanel';
import Table from '../UI/Table';
import ObjectForm from './ObjectForm';
import Spinner from '../UI/Spinner';
import Loader from '../UI/Loader';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';

// TODO: get actions from metadata api
const actions = [
    {action: 'NEW', title: 'New', icon: 'add'},
    {action: 'EDIT', title: 'Edit',  icon: 'edit'},
    {action: 'DELETE', title: 'Delete',  icon: 'delete'},
    /* {action: 'FILTER', title: 'Filter',  icon: 'filter'} */
];

function EntityViewer(props) {
    //console.log("[EntityViewer.js] render");
    
    const [showObjectForm, setShowObjectForm] = useState(false);
    //const [filter, setFilter] = useState({});
    const [metadata, setMetadata] = useState(null);
    const [data, setData] = useState({});
    const [currentItemId, setCurrentItem] = useState(null);
    const [mbOpen, setMbOpen] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);

    const metadataUrl = props.location.pathname+"/metadata";
    const dataUrl = props.location.pathname+"/data";

    useEffect(() => {
        axios.get(metadataUrl+'.json')
        .then(response => {
            setMetadata(response.data);
            fetchData();
        })
    },[metadataUrl]);

    const fetchData = () => {
        setDataLoading(true);
        axios.get(dataUrl+'.json')
        .then(response => {
            setData(response.data);
            setDataLoading(false);
        })    
    }

    const actionDispatch = (action) => {
        if (action === "NEW") {
            setCurrentItem(null);
            setShowObjectForm(true);
        }
        if (action === "EDIT") {
            setShowObjectForm(true);
        }
        if (action === "DELETE") {
            setMbOpen(true);
        }
        /* if (action === "filter") {
            setShowFilter(true);
        } */
    }

    const objectFormDispatch = (action) => {
        if (action === 'OK') {
            fetchData();
        }
        setShowObjectForm(false);
    }

    /* const filterDispatch = (action) => {
        console.log(action);
        setShowFilter(false);   
    } */

    const rowClickHandler = (event) => {
        setCurrentItem(event.target.id);
    }

    const mbCloseHandler = (action) => {
        const mbResult = action.detail.action;
        setMbOpen(false);
        if (mbResult === 'OK') {
            axios.delete(`${dataUrl}/${currentItemId}.json`)
            .then(response => {
                fetchData();
            })
        }        
    }

    const headerClickHandler = (key) => {
        console.log(`Sort by ${key}`);
    }

    let content = <div><Loader /></div>;
    if (metadata) {
        content = (
            <div>
                <h1>{metadata.title}</h1>
                <CommandPanel 
                    actions={actions}
                    dispatch={(action) => actionDispatch(action)}/>
                <Table 
                    columns={metadata.columns} 
                    data={!dataLoading ? data : null}
                    onRowClick={(event) => rowClickHandler(event)}
                    onHeaderClick={(key) => headerClickHandler(key)}>
                </Table>
                {showObjectForm ? <ObjectForm
                    show={showObjectForm}
                    dispatch={(action) => objectFormDispatch(action)}
                    metadata={metadata}
                    dataUrl={dataUrl}
                    currentItemId={currentItemId}
                    currentItem={currentItemId ? data[currentItemId] : null}/> : null}
                <MessageBox 
                    open={mbOpen} 
                    onClose={mbCloseHandler}
                    >Delete object?
                </MessageBox>
                {dataLoading ? <Spinner /> : null}
            </div>
        );
    }
    
    return content;
}

export default EntityViewer;