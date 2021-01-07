import React from 'react';
import { ThemeProvider as UI5ThemeProvier} from '@ui5/webcomponents-react/lib/ThemeProvider';

function ThemeProvider(props) {
        return <UI5ThemeProvier>{props.children}</UI5ThemeProvier>
}

export default ThemeProvider;