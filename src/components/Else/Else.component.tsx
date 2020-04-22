import React from 'react';
import { ElseProps } from './Else.types';

function Else({ children }: ElseProps): JSX.Element {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    ); 
}

export default Else;