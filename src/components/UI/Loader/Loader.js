import React from 'react';
import { Loader as UI5Loader} from '@ui5/webcomponents-react/lib/Loader';

function Loader(props) {
    return <UI5Loader {...props}>{props.children}</UI5Loader>;
}

export default Loader;